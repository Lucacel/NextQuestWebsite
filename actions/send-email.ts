"use server"

// SendGrid integration commented out for now
// import sgMail from "@sendgrid/mail"

// Initialize SendGrid with API key (commented out)
// if (process.env.SENDGRID_API_KEY) {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// }

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

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the message instead of sending email (for now)
    console.log("📧 Terminal Contact Message:", {
      from: senderEmail,
      message: message,
      timestamp: new Date().toISOString(),
      source: "CV Terminal Interface",
    })

    return {
      success: true,
      message: `Message logged successfully! Email sending is currently disabled.`,
    }
  } catch (error) {
    console.error("Error processing message:", error)

    return {
      success: false,
      message: "Failed to process message. Please try again.",
    }
  }
}
