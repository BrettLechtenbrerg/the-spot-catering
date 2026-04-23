'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, FileText, type LucideIcon } from 'lucide-react'
import privacyContent from '@/content/privacy.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  Shield,
  FileText,
}

type BulletItem = string | { label: string; text: string }
type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'bullets'; items: BulletItem[] }

export default function PrivacyPolicyPage() {
  const { hero, intro, sections, contact, footerLink } = privacyContent
  const HeroIcon = iconMap[hero.icon] ?? Shield

  return (
    <>
      {/* Header */}
      <section className="bg-spot-navy text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link
              href={hero.backLink}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-spot-orange transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              {hero.backText}
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <HeroIcon className="text-spot-orange" size={40} />
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                {hero.title}
              </h1>
            </div>
            <p className="text-gray-300">
              {hero.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg prose-gray"
          >
            <p className="lead text-xl text-gray-600 mb-8">
              {intro}
            </p>

            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">
                  {section.heading}
                </h2>
                {(section.blocks as Block[]).map((block, i) => {
                  if (block.type === 'subheading') {
                    return (
                      <h3
                        key={i}
                        className="font-display text-xl text-spot-navy mt-8 mb-3"
                      >
                        {block.text}
                      </h3>
                    )
                  }
                  if (block.type === 'paragraph') {
                    return (
                      <p key={i} className="text-gray-600 mb-4">
                        {block.text}
                      </p>
                    )
                  }
                  if (block.type === 'bullets') {
                    return (
                      <ul
                        key={i}
                        className="list-disc pl-6 text-gray-600 space-y-2 mb-6"
                      >
                        {block.items.map((item, j) =>
                          typeof item === 'string' ? (
                            <li key={j}>{item}</li>
                          ) : (
                            <li key={j}>
                              <strong>{item.label}</strong> {item.text}
                            </li>
                          )
                        )}
                      </ul>
                    )
                  }
                  return null
                })}
              </div>
            ))}

            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 font-semibold mb-2">{contact.name}</p>
              <p className="text-gray-600">{contact.company}</p>
              <p className="text-gray-600">{contact.location}</p>
              <p className="text-gray-600 mt-2">
                <strong>Phone:</strong>{' '}
                <a
                  href={`tel:${contact.phone}`}
                  className="text-spot-orange hover:underline"
                >
                  {contact.phone}
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-spot-orange hover:underline"
                >
                  {contact.email}
                </a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href={footerLink.href}
                className="text-spot-orange hover:underline font-medium"
              >
                {footerLink.text}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
