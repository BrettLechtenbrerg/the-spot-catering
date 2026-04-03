'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  title: string
  highlight?: string
  subtitle: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function HeroSection({
  title,
  highlight,
  subtitle,
  backgroundImage,
  ctaText = "Get A Quote",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-spot-navy/90 via-spot-navy/70 to-spot-navy/50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-spot-orange">{highlight}</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-200 mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href={ctaLink} className="btn-primary flex items-center gap-2">
              {ctaText} <ArrowRight size={18} />
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink} className="btn-outline border-white text-white hover:bg-white hover:text-spot-navy">
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
