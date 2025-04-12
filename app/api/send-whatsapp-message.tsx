// /pages/api/send-whatsapp-message.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

// Fetch credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID as string; // Your Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN as string; // Your Twilio Auth Token
const whatsappNumber = `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`; // Your Twilio WhatsApp number

const client = twilio(accountSid, authToken);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, recipient } = req.body;

  if (!message || !recipient) {
    return res.status(400).json({ error: 'Message and recipient are required.' });
  }

  try {
    console.log("m chala hu");
    
    const response = await client.messages.create({
      from: whatsappNumber, // Twilio WhatsApp number
      to: `whatsapp:${recipient}`, // Recipient's WhatsApp number
      body: message,
    });

    res.status(200).json({ success: true, sid: response.sid });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({ error: 'Failed to send WhatsApp message.' });
  }
}
