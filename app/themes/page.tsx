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
  Snowflake,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const themes = [
  {
    icon: Flame,
    title: 'Taco & Chili Bars',
    description: 'Build-your-own taco stations and hearty chili bars that bring the fiesta to your event.',
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop', // Fiesta/party scene
  },
  {
    icon: Sun,
    title: 'BBQ Cookout',
    description: 'Smoky, savory BBQ spreads with all the classic fixings. Perfect for summer gatherings.',
    color: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop', // Outdoor BBQ gathering
  },
  {
    icon: Beer,
    title: 'Oktoberfest',
    description: 'Bratwurst, pretzels, and German-inspired fare. Prost to great food!',
    color: 'bg-amber-600',
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=400&h=300&fit=crop', // Oktoberfest beer celebration
  },
  {
    icon: Palmtree,
    title: 'Luau Party',
    description: 'Tropical flavors and island vibes. Hawaiian shirts optional but encouraged!',
    color: 'bg-teal-500',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop', // Tropical party celebration
  },
  {
    icon: TreePine,
    title: 'Holiday Celebrations',
    description: 'Thanksgiving feasts, Christmas dinners, and New Year\'s spreads done right.',
    color: 'bg-green-600',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=300&fit=crop', // Holiday decorations
  },
  {
    icon: Heart,
    title: 'Valentine\'s & Love',
    description: 'Romantic spreads for team appreciation or special celebrations.',
    color: 'bg-pink-500',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop', // Romantic setting
  },
  {
    icon: Snowflake,
    title: 'Winter Wonderland',
    description: 'Cozy comfort foods and warming drinks for cold weather events.',
    color: 'bg-blue-400',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=300&fit=crop', // Winter/snow scene
  },
  {
    icon: Sparkles,
    title: 'Custom Themes',
    description: 'Have a unique idea? We love creating custom themed experiences!',
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=400&h=300&fit=crop', // Party celebration
  },
]

const holidays = [
  'New Year\'s Day',
  'Valentine\'s Day',
  'St. Patrick\'s Day',
  'Cinco de Mayo',
  'Fourth of July',
  'Halloween',
  'Thanksgiving',
  'Christmas',
  'Hanukkah',
]

export default function ThemesPage() {
  return (
    <>
      <HeroSection
        title="Themed Events"
        highlight="That Create Memories"
        subtitle="From taco bars to Oktoberfest, holiday feasts to luau parties — we bring your themed event vision to life with incredible food and presentation."
        backgroundImage="/images/IMG_4319.jpg"
        ctaText="Plan Your Theme"
        ctaLink="/contact"
        secondaryCtaText="See Menus"
        secondaryCtaLink="/menus"
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
              Popular <span className="text-spot-orange">Themed Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;ve catered hundreds of themed events. Here are some of our most requested —
              but the sky&apos;s the limit!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-[280px]"
              >
                {/* Greyscale Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={theme.image}
                    alt={theme.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-[50%] transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/95 via-spot-navy/70 to-spot-navy/40 group-hover:from-spot-navy/90 group-hover:via-spot-navy/60 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className={`w-12 h-12 ${theme.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <theme.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-spot-orange transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
            <h3 className="font-display text-3xl text-spot-navy font-bold mb-6">
              Holiday Events We Love Catering
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {holidays.map((holiday) => (
                <span
                  key={holiday}
                  className="bg-white/90 text-spot-navy px-4 py-2 rounded-full font-medium text-sm shadow-md"
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
              How We Create Your <span className="text-spot-orange">Perfect Theme</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell Us Your Vision',
                description: 'Share your theme idea, event details, and guest count. We love hearing your creative ideas!',
              },
              {
                step: '02',
                title: 'We Design The Menu',
                description: 'We\'ll craft a custom menu that perfectly matches your theme with options for every dietary need.',
              },
              {
                step: '03',
                title: 'We Bring The Party',
                description: 'We handle setup, presentation, and cleanup. You focus on enjoying your event!',
              },
            ].map((item, index) => (
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
              Ready to Party?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Tell us about your themed event
              and we&apos;ll make it unforgettable!
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Planning <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
