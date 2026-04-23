'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import {
  ShoppingBag,
  Coffee,
  Sandwich,
  Salad,
  Cookie,
  Wine,
  GlassWater,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Heart,
  Award,
  type LucideIcon,
} from 'lucide-react'
import servicesContent from '@/content/services.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Coffee,
  Sandwich,
  Salad,
  Cookie,
  Wine,
  GlassWater,
  Users,
  Clock,
  MapPin,
  Sparkles,
  Heart,
  Award,
}

export default function ServicesPage() {
  const { hero, grabGo, divider, bartending, royalTreatment, finalCta } = servicesContent

  const GrabGoBadgeIcon = iconMap[grabGo.badgeIcon] ?? ShoppingBag
  const BenefitsCardIcon = iconMap[grabGo.benefitsCard.icon] ?? MapPin
  const BenefitsFloatingIcon = iconMap[grabGo.benefitsCard.floatingIcon] ?? ShoppingBag
  const BartendingBadgeIcon = iconMap[bartending.badgeIcon] ?? Wine

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

      {/* Grab & Go Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-spot-orange/10 text-spot-orange px-4 py-2 rounded-full mb-6">
                <GrabGoBadgeIcon size={18} />
                <span className="text-sm font-semibold">{grabGo.badgeText}</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-6">
                {grabGo.headlineLine1} <span className="text-spot-orange">{grabGo.headlineHighlight}</span>
              </h2>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {grabGo.paragraph1}
              </p>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {grabGo.paragraph2Prefix}
                <strong className="text-spot-navy">{grabGo.paragraph2Emphasis}</strong>
                {grabGo.paragraph2Suffix}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {grabGo.items.map((item, index) => {
                  const ItemIcon = iconMap[item.icon] ?? Sandwich
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3"
                    >
                      <ItemIcon size={20} className="text-spot-orange" />
                      <span className="text-sm font-medium text-spot-navy">{item.name}</span>
                    </motion.div>
                  )
                })}
              </div>

              <Link href={grabGo.ctaLink} className="btn-primary inline-flex items-center gap-2">
                {grabGo.ctaText} <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Benefits Card */}
              <div className="bg-gradient-to-br from-spot-navy to-spot-purple rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <BenefitsCardIcon className="text-spot-orange" size={28} />
                  <h3 className="font-display text-2xl">{grabGo.benefitsCard.title}</h3>
                </div>

                <p className="text-gray-300 mb-8">
                  {grabGo.benefitsCard.description}
                </p>

                <ul className="space-y-4">
                  {grabGo.benefitsCard.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="text-spot-orange flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-200">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-spot-orange rounded-2xl shadow-xl p-4"
              >
                <BenefitsFloatingIcon className="text-white" size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-12 bg-spot-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-display text-3xl md:text-4xl text-spot-navy font-bold">
              {divider.headline}
            </h3>
            <p className="text-spot-navy/80 mt-2">
              {divider.subtext}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bartending Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              {/* Bartending Certification */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
                <Image
                  src={bartending.certificationImage}
                  alt={bartending.certificationAlt}
                  width={600}
                  height={450}
                  className="w-full object-contain rounded-2xl"
                />
              </div>

              {/* Certification Badge */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-spot-purple rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Award className="text-white" size={20} />
                  <span className="font-bold text-white text-sm">{bartending.certifiedBadgeText}</span>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <Wine className="text-spot-purple" size={24} />
                  <span className="font-bold text-spot-navy">{bartending.floatingText}</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-spot-purple/10 text-spot-purple px-4 py-2 rounded-full mb-6">
                <BartendingBadgeIcon size={18} />
                <span className="text-sm font-semibold">{bartending.badgeText}</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-6">
                {bartending.headlineLine1} <span className="text-spot-orange">{bartending.headlineHighlight}</span>
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {bartending.descriptionPrefix}
                <strong className="text-spot-navy">{bartending.descriptionEmphasis}</strong>
                {bartending.descriptionSuffix}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {bartending.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                  >
                    <h4 className="font-display text-lg text-spot-navy mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href={bartending.ctaPrimaryLink} className="btn-primary inline-flex items-center gap-2">
                  {bartending.ctaPrimaryText} <ArrowRight size={18} />
                </Link>
                <Link href={bartending.ctaSecondaryLink} className="btn-secondary inline-flex items-center gap-2">
                  {bartending.ctaSecondaryText} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Services */}
      <section className="section-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {royalTreatment.headlineLine1} <span className="text-spot-orange">{royalTreatment.headlineHighlight}</span> {royalTreatment.headlineLine2}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {royalTreatment.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {royalTreatment.items.map((item, index) => {
              const ItemIcon = iconMap[item.icon] ?? Clock
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="w-16 h-16 bg-spot-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ItemIcon className="text-white" size={32} />
                  </div>
                  <h3 className="font-display text-xl text-spot-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
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
              {finalCta.headlineLine1} <span className="text-spot-orange">{finalCta.headlineHighlight}</span>
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
