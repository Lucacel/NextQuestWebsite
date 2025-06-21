"use server"

import sgMail from "@sendgrid/mail"

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function sendEmail(prevState: any, formData: FormData) {
  try {
    // Add validation to ensure formData exists
    if (!formData) {
      return {
        success: false,
        message: "No form data received",
      }
    }

    const message = formData.get("message") as string
    const senderEmail = (formData.get("senderEmail") as string) || "anonymous@visitor.com"

    // Validate that we have a message
    if (!message || message.trim().length === 0) {
      return {
        success: false,
        message: "Message cannot be empty",
      }
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.log("SendGrid not configured, logging message:", {
        from: senderEmail,
        message: message,
        timestamp: new Date().toISOString(),
      })
      return {
        success: true,
        message: "Message logged successfully! (SendGrid not configured)",
      }
    }

    // Prepare email content
    const emailContent = {
      to: "razvanlucacel@gmail.com", // Your email
      from: process.env.SENDGRID_FROM_EMAIL || "noreply@yourdomain.com", // Must be verified in SendGrid
      replyTo: senderEmail !== "anonymous@visitor.com" ? senderEmail : undefined,
      subject: `New Contact from CV Terminal - ${new Date().toLocaleDateString()}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background-color: #000; color: #00ff00; padding: 20px; border-radius: 8px;">
          <h2 style="color: #00ffff; margin-bottom: 20px;">📧 New Terminal Message</h2>
          
          <div style="background-color: #1a1a1a; padding: 15px; border-left: 4px solid #00ff00; margin: 15px 0;">
            <p style="color: #ffff00; margin: 0 0 10px 0;"><strong>From:</strong> ${senderEmail}</p>
            <p style="color: #ffff00; margin: 0 0 10px 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            <p style="color: #ffff00; margin: 0 0 15px 0;"><strong>Source:</strong> CV Terminal Interface</p>
          </div>

          <div style="background-color: #1a1a1a; padding: 15px; border-left: 4px solid #00ffff; margin: 15px 0;">
            <p style="color: #00ffff; margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <p style="color: #ffffff; margin: 0; white-space: pre-wrap; line-height: 1.4;">${message}</p>
          </div>

          <div style="margin-top: 20px; padding: 10px; background-color: #1a1a1a; border-radius: 4px;">
            <p style="color: #888; font-size: 12px; margin: 0;">
              This message was sent through your interactive CV terminal at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact from CV Terminal

From: ${senderEmail}
Timestamp: ${new Date().toLocaleString()}
Source: CV Terminal Interface

Message:
${message}

---
This message was sent through your interactive CV terminal.
      `,
    }

    // Send the email
    await sgMail.send(emailContent)

    return {
      success: true,
      message: `Message sent successfully! Razvan will get back to you soon.`,
    }
  } catch (error) {
    console.error("Error sending email:", error)

    // Log the message as fallback
    console.log("Fallback logging message:", {
      from: formData?.get("senderEmail") || "unknown",
      message: formData?.get("message") || "unknown",
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
    })

    return {
      success: false,
      message: "Failed to send message. Please try again or contact directly via email.",
    }
  }
}
