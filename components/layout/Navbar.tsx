'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Perkhidmatan', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Hubungi Kami', href: '/contact' },
  ]

  return (
    <nav className="bg-primary-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl hover:text-accent-500 transition-colors">
            <span className="bg-accent-500 text-primary-900 px-3 py-1 rounded font-bold">NAS</span>
            <span>Global Services</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-accent-500 transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/60134556769"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-accent-500 text-primary-900 px-6 py-2 rounded-lg font-bold hover:bg-accent-600 transition-colors"
          >
            Hubungi Kami
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 px-4 hover:bg-primary-600 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/60134556769"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-accent-500 text-primary-900 px-4 py-2 rounded font-bold text-center mt-4 hover:bg-accent-600 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
