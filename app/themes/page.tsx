'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import {
  PartyPopper,
  Flame,
  TreePine,
  Sun,
  Beer,
  Heart,
  Palmtree,
  Crown,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import themesContent from '@/content/themes.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  PartyPopper,
  Flame,
  TreePine,
  Sun,
  Beer,
  Heart,
  Palmtree,
  Crown,
  Sparkles,
}

export default function ThemesPage() {
  const { hero, themesGrid, holidays, process, finalCta } = themesContent

  return (
    <>
      <HeroSection
        title={hero.title}
        highlight={hero.highlight}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        secondaryCtaText={hero.secondaryCtaText}
        secondaryCtaLink={hero.secondaryCtaLink}
      />

      {/* Themes Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {themesGrid.headlineLine1} <span className="text-spot-orange">{themesGrid.headlineHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {themesGrid.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themesGrid.items.map((theme, index) => {
              const Icon = iconMap[theme.icon] ?? Sparkles
              return (
                <motion.div
                  key={theme.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-[240px]"
                >
                  {/* Background Image with Color */}
                  <div className="absolute inset-0">
                    <Image
                      src={theme.image}
                      alt={theme.title}
                      fill
                      className="object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Lighter Overlay for more color */}
                    <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/90 via-spot-navy/50 to-spot-navy/20 group-hover:from-spot-navy/85 group-hover:via-spot-navy/40 group-hover:to-transparent transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <div className={`w-12 h-12 ${theme.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-spot-orange transition-colors">
                      {theme.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Holiday Events Banner */}
      <section className="py-16 bg-spot-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-display text-3xl text-spot-navy font-bold mb-8">
              {holidays.headline}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {holidays.items.map((holiday) => (
                <span
                  key={holiday}
                  className="bg-white/90 text-spot-navy px-4 py-3 rounded-full font-medium text-sm shadow-md text-center"
                >
                  {holiday}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {process.headlineLine1} <span className="text-spot-orange">{process.headlineHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-6xl text-spot-orange/20 font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-2xl text-spot-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-spot-navy to-spot-purple text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <PartyPopper className="mx-auto text-spot-orange mb-6" size={48} />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {finalCta.headline}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {finalCta.subheadline}
            </p>
            <Link href={finalCta.ctaLink} className="btn-primary inline-flex items-center gap-2">
              {finalCta.ctaText} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
