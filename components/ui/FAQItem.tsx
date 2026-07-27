'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white border-2 border-primary-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-primary-50 transition-colors text-left"
      >
        <h3 className="text-lg font-bold text-primary-500">{question}</h3>
        <span className={`text-2xl text-accent-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-primary-50 border-t-2 border-primary-100">
          <p className="text-neutral-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FAQItem
