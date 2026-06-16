// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, tour, hasTransport, transportType, message } = body;

    // Configure Nodemailer transporter
    // IMPORTANT: Replace with your actual email credentials or use a service like Resend/SendGrid
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email provider (e.g., 'outlook', 'yahoo')
      auth: {
        user: process.env.EMAIL_USER, // Your email address (e.g., yourcompany@gmail.com)
        pass: process.env.EMAIL_PASS, // Your email password or App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself, or add a secondary admin email
      replyTo: email,
      subject: `New Tour Inquiry: ${tour} from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Tour:</strong> ${tour}</p>
        <p><strong>Transportation:</strong> ${hasTransport === 'yes' ? `Yes (${transportType})` : 'No'}</p>
        <p><strong>Message:</strong><br/>${message || 'No message provided'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}