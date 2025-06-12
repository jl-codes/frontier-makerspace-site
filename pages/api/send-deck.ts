import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { LRUCache } from 'lru-cache'

/* ─────────────────────────  rate-limiter  ────────────────────────── */

const rateLimitCache = new LRUCache<string, number>({
  max: 1000,           // max items in cache
  ttl: 15 * 60_000,    // 15 minutes
})
const RATE_LIMIT = 5   // max requests per IP within ttl

/* ───────────────────────  utils / validation  ────────────────────── */

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

/**
 * Build an absolute URL to the PDF that works:
 *   • in production  → https://frontiermakerspace.com/files/…
 *   • locally        → http://localhost:3000/files/…
 */
const deckUrl = (req: NextApiRequest) => {
  const host = req.headers.host ?? 'localhost:3000'
  const proto = (req.headers['x-forwarded-proto'] as string) ?? 'http'
  const file = encodeURIComponent('Frontier Makerspace VC Deck.pdf')
  return `${proto}://${host}/files/${file}`
}

/* ───────────────────────────── handler ───────────────────────────── */

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  /* ---------- simple in-memory rate limiting ---------- */
  const ip = (req.headers['x-forwarded-for'] as string) ?? '127.0.0.1'
  const hits = rateLimitCache.get(ip) ?? 0
  if (hits >= RATE_LIMIT) {
    return res
      .status(429)
      .json({ message: 'Too many requests. Please try again later.' })
  }
  rateLimitCache.set(ip, hits + 1)

  /* ---------- input validation ---------- */
  const { email } = req.body as { email: string }
  if (!email || !isValidEmail(email)) {
    return res
      .status(400)
      .json({ message: 'Please provide a valid email address' })
  }

  /* ---------- download the PDF from the CDN ---------- */
  let pdfBuffer: Buffer
  try {
    const pdfResponse = await fetch(deckUrl(req))
    if (!pdfResponse.ok) {
      throw new Error(`Deck download failed with ${pdfResponse.status}`)
    }
    const data = await pdfResponse.arrayBuffer()
    pdfBuffer = Buffer.from(data)
  } catch (err) {
    console.error('Failed to fetch VC deck:', err)
    return res.status(500).json({
      message: 'Could not retrieve the deck file. Please try again later.',
    })
  }

  /* ---------- configure SMTP transport ---------- */
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  })

  try {
    /* ----- send deck to the requester ----- */
    await transporter.sendMail({
      from: `"Frontier Makerspace" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Frontier Makerspace VC Deck',
      html: `
        <p>Hi there!</p>
        <p>Thanks for your interest in Frontier Makerspace. The deck is attached.</p>
        <p>Best,<br/>The Frontier Makerspace team</p>
      `,
      attachments: [
        {
          filename: 'Frontier-Makerspace-VC-Deck.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    })

    /* ----- notify internal address ----- */
    await transporter.sendMail({
      from: `"Frontier Makerspace" <${process.env.EMAIL_USER}>`,
      to: 'info@frontiermakerspace.com',
      subject: 'New VC Deck Request',
      html: `
        <h3>New VC Deck Request</h3>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Date:</strong> ${new Date().toISOString()}</li>
          <li><strong>IP:</strong> ${ip}</li>
        </ul>
      `,
    })

    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (err) {
    console.error('Error sending emails:', err)
    return res
      .status(500)
      .json({ message: 'Failed to send email. Please try again later.' })
  }
}
