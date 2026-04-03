'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Corporate', href: '/corporate' },
  { name: 'Themed Events', href: '/themes' },
  { name: 'Pop-Up Events', href: '/pop-up' },
  { name: 'Menus', href: '/menus' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with contact info */}
      <div className="bg-spot-navy text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:925-699-6629" className="flex items-center gap-1 hover:text-spot-orange transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">925-699-6629</span>
            </a>
            <a href="mailto:spotcafes@gmail.com" className="flex items-center gap-1 hover:text-spot-orange transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">spotcafes@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="cert-badge bg-white/10 text-white text-xs">
              Woman-Owned
            </span>
            <span className="cert-badge bg-white/10 text-white text-xs hidden sm:inline-flex">
              MWBE Certified
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Spot Cafe and Catering logo.jpg"
              alt="The Spot Catering"
              width={70}
              height={70}
              className="rounded-full"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-spot-navy font-medium hover:text-spot-orange transition-colors link-underline"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-spot-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container-custom py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-spot-navy font-medium py-2 hover:text-spot-orange transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
