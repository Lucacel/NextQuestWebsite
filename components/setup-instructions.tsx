"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, ExternalLink } from "lucide-react"

export function SetupInstructions() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null)

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text)
    setCopiedStep(step)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">📧 SendGrid Email Setup Instructions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            <strong>Note:</strong> The email functionality is currently in simulation mode. Follow these steps to enable
            real email sending.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 1: Create SendGrid Account</h3>
            <p className="text-sm text-gray-600 mb-3">Sign up for a free SendGrid account (100 emails/day free tier)</p>
            <Button variant="outline" size="sm" onClick={() => window.open("https://signup.sendgrid.com/", "_blank")}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Sign up for SendGrid
            </Button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 2: Get API Key</h3>
            <p className="text-sm text-gray-600 mb-3">Create an API key in SendGrid dashboard → Settings → API Keys</p>
            <div className="bg-gray-100 p-3 rounded font-mono text-sm">Permissions: Mail Send (Full Access)</div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 3: Verify Sender Email</h3>
            <p className="text-sm text-gray-600 mb-3">
              Verify your sender email in SendGrid dashboard → Settings → Sender Authentication
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 4: Add Environment Variables</h3>
            <p className="text-sm text-gray-600 mb-3">Add these to your environment variables:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-1">
                  SENDGRID_API_KEY=your_sendgrid_api_key_here
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("SENDGRID_API_KEY=your_sendgrid_api_key_here", 1)}
                >
                  {copiedStep === 1 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-1">
                  SENDGRID_FROM_EMAIL=your_verified_email@domain.com
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("SENDGRID_FROM_EMAIL=your_verified_email@domain.com", 2)}
                >
                  {copiedStep === 2 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 5: Deploy & Test</h3>
            <p className="text-sm text-gray-600">
              Deploy your application and test the email functionality using the terminal command:{" "}
              <code className="bg-gray-100 px-1 rounded">email</code>
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 text-sm">
            <strong>✅ Benefits:</strong> Once configured, visitors can send you messages directly through your CV
            terminal, and you'll receive beautifully formatted emails with their contact information and message.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
