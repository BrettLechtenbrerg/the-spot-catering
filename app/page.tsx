'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Building2,
  PartyPopper,
  Coffee,
  UtensilsCrossed,
  Award,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import homeContent from '@/content/home.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  Building2,
  PartyPopper,
  Coffee,
  UtensilsCrossed,
}

// Menu style mapping
const menuStyles: Record<string, { cardStyle: string; iconColor: string; taglineColor: string; itemColor: string; checkColor: string }> = {
  orange: {
    cardStyle: 'bg-spot-orange text-spot-navy',
    iconColor: 'text-spot-navy',
    taglineColor: 'text-spot-navy/80',
    itemColor: 'text-spot-navy/70',
    checkColor: 'text-spot-navy',
  },
  navy: {
    cardStyle: 'bg-spot-navy text-white transform scale-105',
    iconColor: 'text-spot-orange',
    taglineColor: 'text-spot-orange',
    itemColor: 'text-gray-300',
    checkColor: 'text-spot-orange',
  },
  purple: {
    cardStyle: 'bg-spot-purple text-white',
    iconColor: 'text-spot-orange',
    taglineColor: 'text-spot-orange',
    itemColor: 'text-gray-300',
    checkColor: 'text-spot-orange',
  },
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const { hero, certifications, services, motto, whyChooseUs, stats, testimonials, menuPreview, finalCta } = homeContent

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.backgroundImage}
            alt="Corporate catering spread"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-spot-navy/95 via-spot-navy/80 to-spot-navy/60" />
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
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Award size={18} className="text-spot-orange" />
                <span className="text-sm font-medium">{hero.badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {hero.headlineLine1}
                <br />
                <span className="text-spot-orange">{hero.headlineLine2}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              >
                {hero.subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href={hero.ctaPrimaryLink} className="btn-primary flex items-center gap-2">
                  {hero.ctaPrimary} <ArrowRight size={18} />
                </Link>
                <Link href={hero.ctaSecondaryLink} className="btn-outline border-white text-white hover:bg-white hover:text-spot-navy">
                  {hero.ctaSecondary}
                </Link>
              </motion.div>

              {/* Quick certifications */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {certifications.map((cert, index) => (
                  <motion.span
                    key={cert.abbr}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    title={cert.name}
                  >
                    {cert.abbr}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image/Visual - Featured Food Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={hero.featuredImage}
                      alt="Mandy Smith - The Corporate Catering Queen"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="mt-6 text-center text-white">
                    <p className="font-display text-2xl mb-2">{hero.featuredImageCaption}</p>
                    <p className="text-spot-orange font-semibold">{hero.featuredImageSubcaption}</p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <Star className="text-spot-orange fill-spot-orange" size={20} />
                    <span className="font-bold text-spot-navy">5.0</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-spot-orange rounded-2xl shadow-xl p-4"
                >
                  <Heart className="text-white" size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {services.headlineLine1} <span className="text-spot-orange">{services.headlineHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {services.subheadline}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {services.items.map((service) => {
              const Icon = iconMap[service.icon] ?? Building2
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="card-hover group"
                >
                  <Link href={service.href} className="block p-6">
                    <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-display text-xl text-spot-navy mb-2 group-hover:text-spot-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-spot-orange font-medium text-sm">
                      Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="py-12 bg-spot-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-display text-3xl md:text-4xl text-spot-navy font-bold">
              &ldquo;{motto.quote}&rdquo;
            </h3>
            <p className="text-spot-navy/80 mt-2">
              {motto.attribution}
            </p>
          </motion.div>
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
                {whyChooseUs.description}
              </p>

              <ul className="space-y-4">
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

              <div className="mt-8">
                <Link href={whyChooseUs.ctaLink} className="btn-secondary inline-flex items-center gap-2">
                  {whyChooseUs.ctaText} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-spot-navy rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform border-2 border-spot-orange/30"
                >
                  <div className="font-display text-4xl text-spot-orange font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {testimonials.headlineLine1} <span className="text-spot-orange">{testimonials.headlineHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {testimonials.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.items.map((item, index) => {
              const isFirst = index === 0
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={
                    isFirst
                      ? 'bg-gradient-to-br from-spot-navy to-spot-purple rounded-2xl p-8 text-white shadow-xl'
                      : 'bg-spot-orange rounded-2xl p-8 shadow-xl'
                  }
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={isFirst ? 'text-spot-orange fill-spot-orange' : 'text-spot-navy fill-spot-navy'}
                      />
                    ))}
                  </div>
                  <p className={isFirst ? 'text-gray-300 leading-relaxed mb-6' : 'text-spot-navy/80 leading-relaxed mb-6'}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className={
                        isFirst
                          ? 'w-12 h-12 bg-spot-orange rounded-full flex items-center justify-center text-white font-bold'
                          : 'w-12 h-12 bg-spot-navy rounded-full flex items-center justify-center text-white font-bold'
                      }
                    >
                      {item.initials}
                    </div>
                    <div>
                      <p className={isFirst ? 'font-semibold text-white' : 'font-semibold text-spot-navy'}>
                        {item.name}
                      </p>
                      <p className={isFirst ? 'text-sm text-gray-400' : 'text-sm text-spot-navy/70'}>
                        {item.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {menuPreview.headlineLine1} <span className="text-spot-orange">{menuPreview.headlineHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {menuPreview.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuPreview.items.map((menu, index) => {
              const Icon = iconMap[menu.icon] ?? Coffee
              const styles = menuStyles[menu.style] ?? menuStyles.navy
              return (
                <motion.div
                  key={menu.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform ${styles.cardStyle}`}
                >
                  <Icon size={40} className={`${styles.iconColor} mb-4`} />
                  <h3 className="font-display text-2xl mb-2">{menu.title}</h3>
                  <p className={`text-sm font-medium mb-4 ${styles.taglineColor}`}>
                    {menu.tagline}
                  </p>
                  <ul className="space-y-2">
                    {menu.items.map((item) => (
                      <li key={item} className={`flex items-center gap-2 ${styles.itemColor}`}>
                        <CheckCircle size={16} className={styles.checkColor} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href={menuPreview.ctaLink} className="btn-primary inline-flex items-center gap-2">
              {menuPreview.ctaText} <ArrowRight size={18} />
            </Link>
          </motion.div>
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
              <a
                href={`tel:${finalCta.phoneNumber}`}
                className="btn-outline border-white text-white hover:bg-white hover:text-spot-navy"
              >
                {finalCta.phoneText}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
