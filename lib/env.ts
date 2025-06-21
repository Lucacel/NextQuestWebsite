// Environment variables validation
export const env = {
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL: process.env.SENDGRID_FROM_EMAIL,
} as const

// Validate required environment variables
export function validateEnv() {
  const missing = []

  if (!env.SENDGRID_API_KEY) {
    missing.push("SENDGRID_API_KEY")
  }

  if (!env.SENDGRID_FROM_EMAIL) {
    missing.push("SENDGRID_FROM_EMAIL")
  }

  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(", ")}`)
    console.warn("Email functionality will use fallback logging.")
  }

  return missing.length === 0
}
