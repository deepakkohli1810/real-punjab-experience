import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      firstName, lastName, email, countryCode, phone, 
      hasTransport, transportType, message, tour 
    } = body;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      // IMPORTANT: The 'from' address MUST be from a domain verified in your Resend dashboard.
      // For testing, you can use 'onboarding@resend.dev'. For production, use 'bookings@yourdomain.com'.
      from: process.env.RESEND_FROM_EMAIL || 'Website Booking <booking@send.realpunjabexperience.com>', 
      
      to: [process.env.BOOKING_EMAIL || 'contact@realpunjabexperience.com'], // Recipient email(s)
      replyTo: email, // Allows you to reply directly to the customer's email
      
      subject: `New Booking Request: ${tour}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1c2b60; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Tour Booking Request</h1>
          </div>
          
          <div style="padding: 20px; background-color: #ffffff;">
            <h2 style="color: #1c2b60; border-bottom: 2px solid #eee; padding-bottom: 10px;">Tour Details</h2>
            <p><strong>Selected Tour:</strong> ${tour}</p>
            
            <h2 style="color: #1c2b60; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 20px;">Customer Information</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2a3d7f;">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${countryCode}${phone}" style="color: #2a3d7f;">${countryCode} ${phone}</a></p>
            
            <h2 style="color: #1c2b60; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 20px;">Transportation</h2>
            <p><strong>Requires Transport:</strong> ${hasTransport === 'yes' ? 'Yes' : 'No (Managing themselves)'}</p>
            ${hasTransport === 'yes' ? `<p><strong>Vehicle Type:</strong> ${transportType}</p>` : ''}
            
            ${message ? `
              <h2 style="color: #1c2b60; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 20px;">Special Requests / Customization</h2>
              <p style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #1c2b60;">${message}</p>
            ` : ''}
          </div>
          
          <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
            This email was sent from your website's booking form.
          </div>
        </div>
      `,
    });

    // Handle Resend API errors
    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to send booking request. Please try again later.' 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Booking request sent successfully!' 
    });

  } catch (error) {
    console.error('Server Error sending booking email:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send booking request. Please try again later.' 
    }, { status: 500 });
  }
}