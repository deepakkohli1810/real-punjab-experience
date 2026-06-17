// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Added countryCode to match the frontend payload
    const { firstName, lastName, email, countryCode, phone, tour, hasTransport, transportType, message } = body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Allows you to hit "Reply" in Gmail and it goes straight to the customer
      subject: `New Contact Inquiry: ${tour || 'General'} from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background-color: #1c2b60; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 0.5px;">New Contact Inquiry</h1>
          </div>
          
          <!-- Body Content -->
          <div style="padding: 20px; background-color: #ffffff;">
            
            <!-- Customer Info Section -->
            <h2 style="color: #1c2b60; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 0;">Customer Information</h2>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2a3d7f; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${countryCode || ''}${phone}" style="color: #2a3d7f; text-decoration: none;">${countryCode ? countryCode + ' ' : ''}${phone}</a></p>
            
            <!-- Inquiry Details Section -->
            <h2 style="color: #1c2b60; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 25px;">Inquiry Details</h2>
            <p style="margin: 8px 0;"><strong>Interested Tour:</strong> ${tour || 'General Inquiry'}</p>
            <p style="margin: 8px 0;"><strong>Requires Transport:</strong> ${hasTransport === 'yes' ? 'Yes' : 'No (Managing themselves)'}</p>
            ${hasTransport === 'yes' && transportType ? `<p style="margin: 8px 0;"><strong>Vehicle Type:</strong> ${transportType}</p>` : ''}
            
            <!-- Message Section -->
            <h2 style="color: #1c2b60; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 25px;">Message</h2>
            <p style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #1c2b60; margin: 10px 0 0 0; color: #334155; line-height: 1.5;">
              ${message || 'No additional message provided.'}
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
            This email was sent from your website's contact form.
          </div>
          
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}