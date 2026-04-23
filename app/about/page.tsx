'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Clock,
  Shield,
  Smile,
  Handshake,
  Trophy,
  Lightbulb,
  Award,
  ArrowRight,
  Quote,
  Crown,
  type LucideIcon,
} from 'lucide-react'
import aboutContent from '@/content/about.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  Clock,
  Shield,
  Smile,
  Handshake,
  Trophy,
  Lightbulb,
}

export default function AboutPage() {
  const { hero, mission, story, journey, values, certifications, finalCta } = aboutContent

  return (
    <>
      {/* Custom Hero Section with Featured Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.backgroundImage}
            alt="Catering event"
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
                <Crown size={18} className="text-spot-orange" />
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
            </motion.div>

            {/* Featured Image Box - Placeholder for Mandy's photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  {/* Mandy's Photo */}
                  <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={hero.featuredImage}
                      alt="Mandy Smith - The Corporate Catering Queen"
                      fill
                      className="object-contain"
                    />
                    {/* Subtle overlay to blend with site colors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/30 to-transparent" />
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
                    <Award className="text-spot-orange" size={20} />
                    <span className="font-bold text-spot-navy text-sm">MWBE</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-spot-orange rounded-2xl shadow-xl p-4"
                >
                  <Crown className="text-white" size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-spot-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className="mx-auto text-spot-navy/30 mb-4" size={48} />
            <p className="font-display text-3xl md:text-4xl text-spot-navy font-bold max-w-3xl mx-auto">
              &ldquo;{mission.quote}&rdquo;
            </p>
            <p className="text-spot-navy/80 mt-4 font-medium">{mission.attribution}</p>
          </motion.div>
        </div>
      </section>

      {/* Mandy's Story - Personal Narrative */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 prose prose-lg max-w-none"
            >
              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-8">
                {story.headlineLine1} <span className="text-spot-orange">{story.headlineHighlight}</span>
              </h2>

              {story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}

              <p className="text-spot-navy text-xl font-semibold italic">
                &quot;{story.closingQuote}&quot;
              </p>
            </motion.div>

            {/* Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 sticky top-24"
            >
              <div className="relative">
                {/* Mandy's Photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={story.sideImage.src}
                    alt={story.sideImage.alt}
                    width={400}
                    height={500}
                    className="w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-display text-2xl font-bold">{story.sideImage.caption}</p>
                    <p className="text-spot-orange">{story.sideImage.subcaption}</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-spot-orange/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-spot-purple/20 rounded-full blur-2xl" />

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6"
                >
                  <div className="text-center">
                    <p className="font-display text-3xl text-spot-orange font-bold">{story.sideImage.statValue}</p>
                    <p className="text-gray-600 text-sm">{story.sideImage.statLabel}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mandy's Journey - Timeline with Image Cards */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {journey.headlineLine1} <span className="text-spot-orange">{journey.headlineHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {journey.subheadline}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - center on desktop, left on mobile */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-spot-orange via-spot-purple to-spot-navy transform md:-translate-x-1/2" />

            <div className="space-y-16">
              {journey.timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-spot-orange rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg z-10"
                       style={{ top: '2rem' }} />

                  {/* Image Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group h-[280px]">
                      {/* Background Image with Greyscale */}
                      <div className="absolute inset-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/90 via-spot-navy/60 to-spot-navy/30" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                        <span className="inline-block bg-spot-orange text-spot-navy font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3 w-fit">
                          {item.year}
                        </span>
                        <h3 className="font-display text-2xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Step Number */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-spot-orange rounded-full flex items-center justify-center shadow-lg">
                        <span className="font-display font-bold text-spot-navy">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Crown className="mx-auto text-spot-orange mb-4" size={48} />
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              {values.headlineLine1} <span className="text-spot-orange">{values.headlineHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {values.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.items.map((value, index) => {
              const Icon = iconMap[value.icon] ?? Clock
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-spot-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-display text-xl text-spot-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Award className="text-spot-orange mb-4" size={48} />
              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-6">
                {certifications.headlineLine1} <span className="text-spot-orange">{certifications.headlineHighlight}</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {certifications.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {certifications.items.map((cert) => (
                  <div
                    key={cert.abbr}
                    className="bg-gray-50 rounded-xl p-4 text-center"
                  >
                    <div className="font-display text-2xl text-spot-navy font-bold">
                      {cert.abbr}
                    </div>
                    <div className="text-gray-600 text-xs mt-1">
                      {cert.name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src={certifications.image}
                alt={certifications.imageAlt}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
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
              {finalCta.headlineLine1} <span className="text-spot-orange">{finalCta.headlineHighlight}</span>
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
