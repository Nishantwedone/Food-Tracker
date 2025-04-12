// // /pages/api/send-whatsapp-message.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import twilio from 'twilio';

// // Fetch credentials from environment variables
// const accountSid = process.env.TWILIO_ACCOUNT_SID as string; // Your Twilio Account SID
// const authToken = process.env.TWILIO_AUTH_TOKEN as string; // Your Twilio Auth Token
// const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER; // Your Twilio WhatsApp number

// // Validate environment variables
// if (!accountSid || !authToken || !whatsappNumber) {
//   throw new Error('Missing Twilio credentials in environment variables');
// }

// const client = twilio(accountSid, authToken);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { message, recipient } = req.body;

//   if (!message || !recipient) {
//     return res.status(400).json({ error: 'Message and recipient are required.' });
//   }

//   try {
//     const response = await client.messages.create({
//       from: `whatsapp:${whatsappNumber}`, // Twilio WhatsApp number
//       to: `whatsapp:${recipient}`, // Recipient's WhatsApp number
//       body: message,
//     });

//     res.status(200).json({ success: true, sid: response.sid, message: 'Message sent successfully' });
//   } catch (error) {
//     console.error('Error sending WhatsApp message:', error);
//     res.status(500).json({
//       error: 'Failed to send WhatsApp message.',
//       message: error.message,
//     });
//   }
// }


// app/api/send-whatsapp-message/route.ts
import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Fetch credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;

// Validate environment variables
if (!accountSid || !authToken || !whatsappNumber) {
  throw new Error('Missing Twilio credentials in environment variables');
}

const client = twilio(accountSid, authToken);

export async function POST(request: Request) {
  try {
    const { message, recipient } = await request.json();

    if (!message || !recipient) {
      return NextResponse.json(
        { error: 'Message and recipient are required.' },
        { status: 400 }
      );
    }

    // Format the phone number to include country code if not present
    const formattedNumber = recipient.startsWith('+')
      ? recipient
      : `+91${recipient}`; // Assuming Indian numbers

    const response = await client.messages.create({
      from: `whatsapp:${whatsappNumber}`,
      to: `whatsapp:${formattedNumber}`,
      body: message,
    });

    return NextResponse.json({
      success: true,
      sid: response.sid,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return NextResponse.json(
      {
        error: 'Failed to send WhatsApp message.',
        message: error.message,
      },
      { status: 500 }
    );
  }
}