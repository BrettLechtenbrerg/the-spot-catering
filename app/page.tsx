'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Building2,
  PartyPopper,
  Sparkles,
  Coffee,
  UtensilsCrossed,
  Award,
  Heart,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Service cards data
const services = [
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Team trainings, meetings, and retreats that make your company culture shine.',
    href: '/corporate',
    color: 'bg-spot-navy',
  },
  {
    icon: PartyPopper,
    title: 'Themed Events',
    description: 'Taco bars, Oktoberfest, BBQ, holidays — the sky\'s the limit!',
    href: '/themes',
    color: 'bg-spot-purple',
  },
  {
    icon: Sparkles,
    title: 'Pop-Up Events',
    description: 'Holiday pop-ups and community events that create memorable moments.',
    href: '/pop-up',
    color: 'bg-spot-orange-red',
  },
  {
    icon: Coffee,
    title: 'Happy Hour',
    description: 'Beautiful charcuterie boards and grazing tables for after-hours magic.',
    href: '/menus',
    color: 'bg-spot-teal',
  },
]

// Stats
const stats = [
  { value: '100+', label: 'Corporate Clients' },
  { value: '500+', label: 'Events Catered' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction' },
]

// Certifications
const certifications = [
  { abbr: 'MWBE', name: 'Minority Women\'s Business Enterprise' },
  { abbr: 'DBE', name: 'Disadvantaged Business Enterprise' },
  { abbr: 'EBE', name: 'Emerging Business Enterprise' },
  { abbr: 'SBEC', name: 'Small Business Enterprise Concessionaire' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Full Menu photo.jpg"
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
                <span className="text-sm font-medium">Woman-Owned & Certified</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                We Know How To
                <br />
                <span className="text-spot-orange">Hit The Spot</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              >
                Denver&apos;s Corporate Catering Queen. Professional, creative, and
                <span className="text-spot-orange font-semibold"> spot on</span> catering
                that makes every event unforgettable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact" className="btn-primary flex items-center gap-2">
                  Book Your Event <ArrowRight size={18} />
                </Link>
                <Link href="/menus" className="btn-outline border-white text-white hover:bg-white hover:text-spot-navy">
                  View Our Menus
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
                  <Image
                    src="/images/IMG_4319.jpg"
                    alt="Delicious catering spread"
                    width={500}
                    height={350}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="mt-6 text-center text-white">
                    <p className="font-display text-2xl mb-2">Denver&apos;s Favorite</p>
                    <p className="text-spot-orange font-semibold">Corporate Caterer</p>
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
              You&apos;ve Found Your <span className="text-spot-orange">Spot</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From corporate breakfasts to themed celebrations, we make food fun,
              social, and special for everyone.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="card-hover group"
              >
                <Link href={service.href} className="block p-6">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="text-white" size={28} />
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
            ))}
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
              &ldquo;More Espresso, Less Depresso&rdquo;
            </h3>
            <p className="text-spot-navy/80 mt-2">
              — Our motto for breakfast events ☕
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
                Why We&apos;re <span className="text-spot-orange">Spot On</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                When you work with The Spot Catering, you get more than great food —
                you get a partner who handles the heavy lifting so you can focus on
                what matters: your guests.
              </p>

              <ul className="space-y-4">
                {[
                  'Professional, stress-free event coordination',
                  'Creative menus tailored to your vision',
                  'Woman-owned with certified diversity credentials',
                  'Served the National Guard for 36 days during COVID',
                  'From intimate meetings to large celebrations',
                ].map((item, index) => (
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
                <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
                  Our Story <ArrowRight size={18} />
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
                  className="bg-white rounded-2xl shadow-lg p-6 text-center"
                >
                  <div className="font-display text-4xl text-spot-orange font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              Catering That <span className="text-spot-orange">Hits Different</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From breakfast boards to happy hour spreads — we&apos;ve got you covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Breakfast',
                price: 'From $5/person',
                items: ['Breakfast Boards', 'Burrito Platters', 'Coffee Service'],
                icon: Coffee,
              },
              {
                title: 'Lunch',
                price: 'From $12/person',
                items: ['Individual Packages', 'Buffet Style', 'Build Your Own'],
                icon: UtensilsCrossed,
                featured: true,
              },
              {
                title: 'Happy Hour',
                price: 'Custom Pricing',
                items: ['Charcuterie Boards', 'Grazing Tables', 'Themed Spreads'],
                icon: PartyPopper,
              },
            ].map((menu, index) => (
              <motion.div
                key={menu.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  menu.featured
                    ? 'bg-spot-navy text-white transform scale-105 shadow-2xl'
                    : 'bg-gray-50'
                }`}
              >
                <menu.icon
                  size={40}
                  className={menu.featured ? 'text-spot-orange mb-4' : 'text-spot-purple mb-4'}
                />
                <h3 className="font-display text-2xl mb-2">{menu.title}</h3>
                <p className={`text-lg font-semibold mb-4 ${
                  menu.featured ? 'text-spot-orange' : 'text-spot-orange'
                }`}>
                  {menu.price}
                </p>
                <ul className="space-y-2">
                  {menu.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 ${
                        menu.featured ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <CheckCircle size={16} className="text-spot-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/menus" className="btn-primary inline-flex items-center gap-2">
              View Full Menu <ArrowRight size={18} />
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
              Ready to Find Your <span className="text-spot-orange">Spot</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s make your next corporate event extra delicious.
              Contact Mandy today for a custom quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get A Quote
              </Link>
              <a href="tel:925-699-6629" className="btn-outline border-white text-white hover:bg-white hover:text-spot-navy">
                Call 925-699-6629
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
