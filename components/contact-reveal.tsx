"use client"

import { useState } from "react"
import { Eye } from "lucide-react"

interface ContactRevealProps {
  label: string
  value: string
  type?: "email" | "phone"
}

export function ContactReveal({ label, value, type = "email" }: ContactRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleReveal = () => {
    setIsRevealed(true)
  }

  if (isRevealed) {
    return (
      <div className="flex items-center gap-2 break-all">
        <span className="text-cyan-400 flex-shrink-0">{label}:</span>
        {type === "email" ? (
          <a href={`mailto:${value}`} className="text-white hover:text-cyan-400 transition-colors">
            {value}
          </a>
        ) : (
          <a href={`tel:${value}`} className="text-white hover:text-cyan-400 transition-colors">
            {value}
          </a>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-cyan-400 flex-shrink-0">{label}:</span>
      <button
        onClick={handleReveal}
        className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition-colors text-xs sm:text-sm border border-yellow-400 hover:border-yellow-300 px-2 py-1 rounded"
      >
        <Eye className="w-3 h-3" />
        <span>Click to reveal</span>
      </button>
    </div>
  )
}
