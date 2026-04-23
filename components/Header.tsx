'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import shared from '@/content/shared.json'

const { header, contact } = shared
const navigation = header.navigation

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with contact info */}
      <div className="bg-spot-navy text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${contact.phone}`} className="flex items-center gap-1 hover:text-spot-orange transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-1 hover:text-spot-orange transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">{contact.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="cert-badge bg-white/10 text-white text-xs">
              {header.topBarBadge1}
            </span>
            <span className="cert-badge bg-white/10 text-white text-xs hidden sm:inline-flex">
              {header.topBarBadge2}
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
              src={header.logo}
              alt={header.logoAlt}
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
            <Link
              href="/crock-spot"
              className="px-4 py-2 rounded-full border-2 border-[#2F2744] bg-white hover:bg-[#2F2744] transition-colors group"
            >
              <span className="font-bold text-[#2F2744] group-hover:text-white">CROCK</span>
              <span className="font-bold text-[#F49220]">Spot</span>
            </Link>
            <Link href={header.ctaLink} className="btn-primary">
              {header.ctaLabel}
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
                href="/crock-spot"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-bold text-[#2F2744]">CROCK</span>
                <span className="font-bold text-[#F49220]">Spot</span>
                <span className="text-gray-500 text-sm ml-2">→ Food Truck Partner</span>
              </Link>
              <Link
                href={header.ctaLink}
                className="btn-primary block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {header.ctaLabel}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
