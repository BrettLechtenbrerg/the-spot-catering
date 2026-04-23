'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import {
  Coffee,
  Utensils,
  Wine,
  ChefHat,
  ArrowRight,
  CheckCircle,
  Flame,
  type LucideIcon,
} from 'lucide-react'
import menusContent from '@/content/menus.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Utensils,
  Wine,
  ChefHat,
}

export default function MenusPage() {
  const { hero, intro, menuCategories, extras, finalCta } = menusContent

  return (
    <>
      <HeroSection
        title={hero.title}
        highlight={hero.highlight}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
      />

      {/* Menu Categories */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {intro.headlineLine1} <span className="text-spot-orange">{intro.headlineHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {intro.subheadline}
            </p>
          </motion.div>

          <div className="space-y-16">
            {menuCategories.map((category, catIndex) => {
              const Icon = iconMap[category.icon] ?? Coffee
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className={`rounded-3xl overflow-hidden shadow-xl ${category.bgColor}`}
                >
                  {/* Category Header */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className={`w-16 h-16 ${category.accentColor} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon className={category.iconColor} size={32} />
                      </motion.div>
                      <div>
                        <h3 className={`font-display text-4xl ${category.textColor} drop-shadow-lg`}>
                          {category.title}
                        </h3>
                        <p className={`${category.textColor} opacity-90 font-medium italic text-lg flex items-center gap-2`}>
                          <Flame size={16} className="text-yellow-300" />
                          {category.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Menu Items Grid with Image Backgrounds */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.1 }}
                          className="relative rounded-2xl overflow-hidden h-[280px] group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                          {/* Background Image with Color */}
                          <div className="absolute inset-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                            />
                            {/* Lighter Overlay for more color */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/75 group-hover:via-black/30 group-hover:to-transparent transition-all duration-300" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                            <h4 className="font-display text-2xl group-hover:text-spot-orange transition-colors mb-2">
                              {item.name}
                            </h4>
                            <p className="text-gray-200 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 bg-spot-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-display text-3xl text-spot-navy font-bold mb-4">
              {extras.heading}
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {extras.items.map((extra, index) => (
              <motion.div
                key={extra}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md"
              >
                <CheckCircle className="text-spot-navy" size={18} />
                <span className="text-spot-navy font-medium text-sm">{extra}</span>
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {finalCta.headlineLine1} <span className="text-spot-orange">{finalCta.headlineHighlight}</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {finalCta.subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={finalCta.ctaPrimaryLink} className="btn-primary inline-flex items-center gap-2">
                {finalCta.ctaPrimary} <ArrowRight size={18} />
              </Link>
              <a href={`tel:${finalCta.phoneNumber}`} className="btn-outline border-white text-white hover:bg-white hover:text-spot-navy">
                {finalCta.phoneText}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
