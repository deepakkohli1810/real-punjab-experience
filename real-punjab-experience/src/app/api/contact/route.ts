// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, countryCode, phone, tour, hasTransport, transportType, message } = body;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      // IMPORTANT: The 'from' address MUST be from a domain verified in your Resend dashboard.
      // For testing, you can use 'onboarding@resend.dev'. For production, use 'contact@yourdomain.com'.
      from: process.env.RESEND_FROM_EMAIL || 'Website Contact <booking@send.realpunjabexperience.com>', 
      
      to: [process.env.BOOKING_EMAIL || 'contact@realpunjabexperience.com'], // Recipient email(s)
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
    });

    // Handle Resend API errors
    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 });
  }
}