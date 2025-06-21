"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useActionState } from "react"
import { sendEmail } from "../actions/send-email"

export function TerminalInput() {
  const [input, setInput] = useState("")
  const [isComposing, setIsComposing] = useState(false)
  const [senderEmail, setSenderEmail] = useState("")
  const [showEmailInput, setShowEmailInput] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const [state, formAction, isPending] = useActionState(sendEmail, { success: false, message: "" })

  useEffect(() => {
    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    // Reset form state after successful submission
    if (state?.success) {
      setIsComposing(false)
      setShowEmailInput(false)
      setInput("")
      setSenderEmail("")
    }
  }, [state])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Handle special commands
    if (input.trim() === "help") {
      setInput("")
      alert(`Available commands:
• help - Show this help message
• clear - Clear the terminal
• email - Send a message to Razvan
• contact - Show contact information
• skills - Show technical skills
• experience - Show work experience`)
      return
    }

    if (input.trim() === "clear") {
      setInput("")
      window.location.reload()
      return
    }

    if (input.trim() === "contact") {
      setInput("")
      alert(`Contact Information:
Email: razvanlucacel@gmail.com
Phone: +40736505149
Location: Cluj-Napoca, Romania
LinkedIn: linkedin.com/in/lucacel-razvan`)
      return
    }

    if (input.trim() === "email") {
      setIsComposing(true)
      setShowEmailInput(true)
      setInput("")
      return
    }

    // Default response for unknown commands
    setInput("")
    alert(`Command not found: ${input.trim()}
Type 'help' for available commands.`)
  }

  const cancelEmail = () => {
    setIsComposing(false)
    setShowEmailInput(false)
    setInput("")
    setSenderEmail("")
  }

  if (state?.success) {
    return (
      <div className="space-y-2">
        <div className="text-green-400 text-sm">✓ {state.message}</div>
        <div className="flex items-center gap-2">
          <span className="text-green-400">razvan@dev-machine</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$</span>
          <button onClick={() => window.location.reload()} className="text-yellow-400 hover:text-yellow-300 underline">
            Send another message
          </button>
        </div>
      </div>
    )
  }

  if (state && !state.success && state.message) {
    return (
      <div className="space-y-2">
        <div className="text-red-400 text-sm">✗ {state.message}</div>
        <div className="flex items-center gap-2">
          <span className="text-green-400">razvan@dev-machine</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$</span>
          <button onClick={() => window.location.reload()} className="text-yellow-400 hover:text-yellow-300 underline">
            Try again
          </button>
        </div>
      </div>
    )
  }

  if (isComposing) {
    return (
      <div className="space-y-3">
        {showEmailInput && (
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">Your email (optional):</span>
            <input
              ref={emailInputRef}
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              className="bg-transparent border-none outline-none text-white flex-1"
              placeholder="your.email@example.com"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setShowEmailInput(false)
                  if (inputRef.current) {
                    inputRef.current.focus()
                  }
                }
                if (e.key === "Escape") {
                  cancelEmail()
                }
              }}
            />
          </div>
        )}

        {!showEmailInput && (
          <div className="space-y-2">
            <div className="text-cyan-400 text-sm">
              Composing message to razvanlucacel@gmail.com...
              <br />
              <span className="text-gray-400">Press Ctrl+C to cancel, Enter to send</span>
            </div>
            <form action={formAction} className="flex items-center gap-2">
              <span className="text-green-400">message</span>
              <span className="text-white">{">"}</span>
              <input
                ref={inputRef}
                type="text"
                name="message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none text-white flex-1"
                placeholder="Type your message here..."
                disabled={isPending}
                onKeyDown={(e) => {
                  if (e.key === "Escape" || (e.ctrlKey && e.key === "c")) {
                    cancelEmail()
                  }
                }}
                required
              />
              <input type="hidden" name="senderEmail" value={senderEmail} />
              {isPending && <span className="text-yellow-400">Sending...</span>}
              <span className="text-white animate-pulse">_</span>
            </form>
          </div>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <span className="text-green-400">razvan@dev-machine</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none text-white flex-1"
          placeholder="Type 'help' for commands or 'email' to send a message..."
        />
        <span className="text-white animate-pulse">_</span>
      </div>
    </form>
  )
}
