'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import shared from '@/content/shared.json'

const { header, footer, contact, social } = shared

// Split the tagline around the highlight phrase to preserve inline styling
function renderHighlighted(text: string, highlight: string) {
  if (!highlight || !text.includes(highlight)) {
    return <>{text}</>
  }
  const [before, ...rest] = text.split(highlight)
  const after = rest.join(highlight)
  return (
    <>
      {before}
      <span className="text-spot-orange font-semibold">{highlight}</span>
      {after}
    </>
  )
}

export default function Footer() {
  return (
    <footer className="bg-spot-navy text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <Image
                src={header.logo}
                alt={header.logoAlt}
                width={90}
                height={90}
                className="rounded-full"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {renderHighlighted(footer.tagline, footer.taglineHighlight)}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-spot-orange transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-spot-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-spot-orange">
              {footer.quickLinksHeading}
            </h3>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-spot-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-spot-orange">
              {footer.servicesHeading}
            </h3>
            <ul className="space-y-3">
              {footer.services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Certifications */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold mb-6 text-spot-orange">
                {footer.contactHeading}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-spot-orange transition-colors"
                  >
                    <Phone size={18} className="text-spot-orange" />
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-spot-orange transition-colors"
                  >
                    <Mail size={18} className="text-spot-orange" />
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <MapPin size={18} className="text-spot-orange flex-shrink-0 mt-1" />
                  <span>{contact.location}</span>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-display text-sm font-semibold mb-3 text-spot-teal">
                {footer.certificationsHeading}
              </h4>
              <div className="flex flex-wrap gap-2">
                {footer.certifications.map((cert) => (
                  <span
                    key={cert.abbr}
                    className="bg-white/10 text-xs px-2 py-1 rounded-full"
                    title={cert.name}
                  >
                    {cert.abbr}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-spot-orange transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="text-gray-400 hover:text-spot-orange transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              {renderHighlighted(footer.bottomTagline, footer.bottomTaglineHighlight)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
