'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const quickLinks = [
  { name: 'Corporate Catering', href: '/corporate' },
  { name: 'Themed Events', href: '/themes' },
  { name: 'Pop-Up Events', href: '/pop-up' },
  { name: 'Menus & Pricing', href: '/menus' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  'Breakfast Boards',
  'Lunch Catering',
  'Coffee Service',
  'Happy Hour',
  'Themed Meals',
  'Holiday Events',
]

const certifications = [
  { name: 'MWBE', full: 'Minority Women\'s Business Enterprise' },
  { name: 'DBE', full: 'Disadvantaged Business Enterprise' },
  { name: 'EBE', full: 'Emerging Business Enterprise' },
  { name: 'SBEC', full: 'Small Business Enterprise Concessionaire' },
]

export default function Footer() {
  return (
    <footer className="bg-spot-navy text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-spot-navy border-2 border-spot-orange">
                <Image
                  src="/images/Spot Cafe and Catering logo.jpg"
                  alt="The Spot Catering"
                  width={100}
                  height={100}
                  className="rounded-full scale-110"
                  style={{ marginTop: '-5px', marginLeft: '-5px' }}
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Denver&apos;s Corporate Catering Queen. We know how to <span className="text-spot-orange font-semibold">hit the spot</span> with
              professional, creative, and delicious catering for your corporate events.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/thespotcafes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-spot-orange transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/spotcafes/"
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
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
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
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
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
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:925-699-6629"
                    className="flex items-center gap-3 text-gray-300 hover:text-spot-orange transition-colors"
                  >
                    <Phone size={18} className="text-spot-orange" />
                    925-699-6629
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:spotcafes@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-spot-orange transition-colors"
                  >
                    <Mail size={18} className="text-spot-orange" />
                    spotcafes@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <MapPin size={18} className="text-spot-orange flex-shrink-0 mt-1" />
                  <span>Denver, Colorado</span>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-display text-sm font-semibold mb-3 text-spot-teal">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert.name}
                    className="bg-white/10 text-xs px-2 py-1 rounded-full"
                    title={cert.full}
                  >
                    {cert.name}
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
              © {new Date().getFullYear()} The Spot Catering. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              MNS Worldwide LLC — <span className="text-spot-orange">Majority Woman-Owned Business</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
