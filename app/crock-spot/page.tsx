'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Truck,
  Clock,
  Users,
  ArrowRight,
  Award,
  Utensils,
  Star,
  FileCheck,
  Leaf,
  ChefHat,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import crockSpotContent from '@/content/crock-spot.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  Truck,
  Clock,
  Users,
  Award,
  Utensils,
  Star,
  FileCheck,
  Leaf,
  ChefHat,
  Zap,
}

export default function CrockSpotPage() {
  const { hero, familyBanner, whyCrockSpot, menuSection, governmentSection, finalCta } = crockSpotContent

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.backgroundImage}
            alt={hero.backgroundAlt}
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F2744]/95 via-[#2F2744]/85 to-[#2F2744]/70" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <Image
                  src={hero.logoImage}
                  alt={hero.logoAlt}
                  width={350}
                  height={150}
                  className="w-auto h-auto max-w-[350px]"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl text-[#F49220] font-bold mb-4"
              >
                {hero.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              >
                {hero.subheadlinePrefix}
                <span className="text-[#F49220] font-semibold">{hero.subheadlineHighlight}</span>
                {hero.subheadlineSuffix}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={hero.ctaPrimaryHref}
                  className="bg-[#F49220] text-[#2F2744] px-8 py-4 rounded-lg font-bold hover:bg-[#F49220]/90 transition-colors inline-flex items-center gap-2"
                >
                  {hero.ctaPrimary} <ArrowRight size={18} />
                </a>
                <a
                  href={hero.ctaSecondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#2F2744] transition-colors"
                >
                  {hero.ctaSecondary}
                </a>
              </motion.div>
            </motion.div>

            {/* Featured Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center text-white mb-6">
                  <Award className="mx-auto text-[#F49220] mb-4" size={48} />
                  <p className="font-display text-2xl font-bold">{hero.badgeTitle}</p>
                  <p className="text-[#F49220]">{hero.badgeSubtitle}</p>
                </div>

                <div className="space-y-4">
                  {hero.badgeItems.map((item) => {
                    const Icon = iconMap[item.icon] ?? Truck
                    return (
                      <div key={item.text} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                        <Icon className="text-[#F49220]" size={24} />
                        <span>{item.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-[#F49220] rounded-2xl shadow-xl p-4"
              >
                <Star className="text-white" size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Family Connection Banner */}
      <section className="py-12 bg-spot-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-display text-2xl md:text-3xl text-spot-navy font-bold">
              {familyBanner.headline}
            </p>
            <p className="text-spot-navy/80 mt-2">
              {familyBanner.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Crock Spot */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {whyCrockSpot.headlineLine1} <span className="text-[#F49220]">{whyCrockSpot.headlineHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {whyCrockSpot.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCrockSpot.items.map((item, index) => {
              const Icon = iconMap[item.icon] ?? Clock
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#614B8A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-display text-xl text-spot-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-6">
                {menuSection.headlineLine1} <span className="text-[#F49220]">{menuSection.headlineHighlight}</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {menuSection.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {menuSection.highlights.map((item, index) => {
                  const Icon = iconMap[item.icon] ?? Utensils
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                    >
                      <Icon className="text-[#F49220] mb-3" size={28} />
                      <h4 className="font-display text-lg text-spot-navy mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#2F2744] rounded-3xl p-8 text-white">
                <h3 className="font-display text-2xl mb-6 text-center">{menuSection.serviceOptionsTitle}</h3>
                <div className="space-y-4">
                  {menuSection.serviceTypes.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center bg-white/10 rounded-xl p-4"
                    >
                      <div>
                        <p className="font-semibold">{service.name}</p>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                      <span className="text-[#F49220] font-bold">{service.price}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-center text-gray-400 text-sm mt-6">
                  {menuSection.serviceOptionsFootnote}
                </p>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-[#F49220] rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Truck className="text-white" size={20} />
                  <span className="font-bold text-white text-sm">{menuSection.mobileBadgeText}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government & Corporate Ready */}
      <section className="py-16 bg-[#614B8A]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <FileCheck className="mx-auto mb-4" size={48} />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {governmentSection.headline}
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              {governmentSection.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {governmentSection.pills.map((pill) => (
                <div key={pill} className="bg-white/20 px-6 py-3 rounded-full">
                  <span className="font-semibold">{pill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2F2744] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {finalCta.headlineLine1} <span className="text-[#F49220]">{finalCta.headlineHighlight}</span>{finalCta.headlineSuffix}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {finalCta.subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={finalCta.ctaPrimaryHref}
                className="bg-[#F49220] text-[#2F2744] px-8 py-4 rounded-lg font-bold hover:bg-[#F49220]/90 transition-colors inline-flex items-center gap-2"
              >
                {finalCta.ctaPrimary}
              </a>
              <Link href={finalCta.ctaSecondaryHref} className="btn-outline border-white text-white hover:bg-white hover:text-[#2F2744]">
                {finalCta.ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
