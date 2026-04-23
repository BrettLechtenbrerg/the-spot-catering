'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import {
  Building2,
  Users,
  Coffee,
  Utensils,
  Calendar,
  CheckCircle,
  ArrowRight,
  Award,
  Sparkles,
  MapPin,
  Zap,
  Star,
  Heart,
  type LucideIcon,
} from 'lucide-react'
import corporateContent from '@/content/corporate.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Users,
  Coffee,
  Utensils,
  Calendar,
  Sparkles,
  MapPin,
  Zap,
  Star,
  Heart,
}

export default function CorporatePage() {
  const { hero, services, popUps, whyPopUpsWork, whyChooseUs, finalCta } = corporateContent

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

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {services.headlineLine1} <span className="text-spot-orange">{services.headlineHighlight}</span> {services.headlineLine2}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {services.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.items.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Building2
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-[320px]"
                >
                  {/* Background Image with Color */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Lighter Overlay for more color */}
                    <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/90 via-spot-navy/50 to-spot-navy/20 group-hover:from-spot-navy/85 group-hover:via-spot-navy/40 group-hover:to-transparent transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <div className="w-12 h-12 bg-spot-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-display text-2xl mb-2 group-hover:text-spot-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pop-Up Events Section */}
      <section className="py-16 bg-spot-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Sparkles className="mx-auto text-spot-navy mb-4" size={40} />
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy font-bold mb-4">
              {popUps.heading}
            </h2>
            <p className="text-spot-navy/80 max-w-2xl mx-auto text-lg">
              {popUps.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popUps.popUpTypes.map((type, index) => {
              const Icon = iconMap[type.icon] ?? Sparkles
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-spot-navy rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/20"
                >
                  <div className={`w-12 h-12 ${type.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-lg text-white mb-2">{type.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{type.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href={popUps.ctaLink} className="bg-spot-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-spot-navy-light transition-colors inline-flex items-center gap-2">
              {popUps.ctaText} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Pop-Ups Work */}
      <section className="section bg-gradient-to-br from-spot-navy via-spot-navy to-spot-purple">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                {whyPopUpsWork.headlineLine1} <span className="text-spot-orange">{whyPopUpsWork.headlineHighlight}</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {whyPopUpsWork.description}
              </p>

              <div className="space-y-4">
                {whyPopUpsWork.benefits.map((benefit, index) => {
                  const Icon = iconMap[benefit.icon] ?? Star
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <div className="w-12 h-12 bg-spot-orange rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-white mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {benefit.description}
                        </p>
                      </div>
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
              <div className="rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
                <Image
                  src={whyPopUpsWork.image}
                  alt="Pop-up event catering"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating accent */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-4 -right-4 bg-spot-orange rounded-2xl shadow-xl p-4"
              >
                <Sparkles className="text-white" size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-6">
                {whyChooseUs.headlineLine1} <span className="text-spot-orange">{whyChooseUs.headlineHighlight}</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {whyChooseUs.intro}
              </p>

              <ul className="space-y-4 mb-8">
                {whyChooseUs.bullets.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-spot-orange flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link href={whyChooseUs.ctaLink} className="btn-primary inline-flex items-center gap-2">
                {whyChooseUs.ctaText} <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src={whyChooseUs.image}
                alt="Corporate catering spread"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-spot-navy text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="text-spot-orange" size={32} />
                  <div>
                    <div className="font-display text-lg">{whyChooseUs.certificationsTitle}</div>
                    <div className="text-sm text-gray-300">{whyChooseUs.certificationsSubtitle}</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <Link href={finalCta.ctaPrimaryLink} className="btn-primary">
                {finalCta.ctaPrimary}
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
