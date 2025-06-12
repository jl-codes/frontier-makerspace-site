import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { join } from 'path';
import { LRUCache } from 'lru-cache';

// Simple in-memory rate limiting
const rateLimitCache = new LRUCache<string, number>({
  max: 1000, // Max items in cache
  ttl: 15 * 60 * 1000, // 15 minutes
});

const RATE_LIMIT = 5; // Max requests per IP per 15 minutes

// Validate email format
const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Simple rate limiting
  const ip = (req.headers['x-forwarded-for'] as string) || '127.0.0.1';
  const ipCount = (rateLimitCache.get(ip) as number) || 0;
  
  if (ipCount >= RATE_LIMIT) {
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }
  
  rateLimitCache.set(ip, ipCount + 1);

  const { email } = req.body as { email: string };

  // Validate email
  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address' });
  }

  // Configure email transport for Namecheap Private Email
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com', // Namecheap Private Email SMTP server
    port: 587, // Use 587 for TLS
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your full email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app password
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  try {
    const pdfPath = join(process.cwd(), 'public/files/Frontier Makerspace VC Deck.pdf');
    
    // Send VC Deck to the user
    await transporter.sendMail({
      from: `"Frontier Makerspace" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Frontier Makerspace VC Deck',
      text: 'Thank you for your interest in Frontier Makerspace. Please find attached our VC Deck.',
      html: `
        <div>
          <h2>Thank you for your interest in Frontier Makerspace!</h2>
          <p>Please find attached our VC Deck. If you have any questions, feel free to reply to this email.</p>
          <p>Best regards,<br/>The Frontier Makerspace Team</p>
        </div>
      `,
      attachments: [
        {
          filename: 'Frontier-Makerspace-VC-Deck.pdf',
          path: pdfPath,
          contentType: 'application/pdf',
        },
      ],
    });

    // Notify admin
    await transporter.sendMail({
      from: `"Frontier Makerspace" <${process.env.EMAIL_USER}>`,
      to: 'info@frontiermakerspace.com',
      subject: 'New VC Deck Request',
      text: `A new user has requested the VC Deck: ${email}`,
      html: `
        <div>
          <h2>New VC Deck Request</h2>
          <p>Email: ${email}</p>
          <p>Date: ${new Date().toLocaleString()}</p>
          <p>IP: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    return res.status(500).json({ 
      message: 'Failed to send email. Please try again later.' 
    });
  }
}
