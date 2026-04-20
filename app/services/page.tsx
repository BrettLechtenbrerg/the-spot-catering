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
  Award
} from 'lucide-react'

const grabGoItems = [
  { icon: Sandwich, name: 'Fresh Sandwiches' },
  { icon: Salad, name: 'Healthy Salads' },
  { icon: Coffee, name: 'Wraps & Bowls' },
  { icon: Cookie, name: 'Snacks & Treats' },
  { icon: GlassWater, name: 'Beverages' },
  { icon: Heart, name: 'Healthy Options' },
]

const grabGoBenefits = [
  'Curated selection of Colorado-based vendors',
  'Fresh items delivered and stocked regularly',
  'Perfect for offices without a full-service cafe',
  'Customizable to your team\'s preferences',
  'Supporting local Colorado purveyors',
  'Hassle-free — we handle everything',
]

const bartendingServices = [
  {
    title: 'Corporate Happy Hours',
    description: 'End the workday right with professionally crafted cocktails and mocktails for your team.',
  },
  {
    title: 'Holiday Parties',
    description: 'Make your holiday celebrations memorable with festive drinks and expert bartending.',
  },
  {
    title: 'Client Events',
    description: 'Impress clients with a premium bar experience that reflects your company\'s excellence.',
  },
  {
    title: 'Team Celebrations',
    description: 'Milestones, promotions, and wins deserve a toast — we\'ll make it special.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Beyond Catering"
        highlight="Full-Service Solutions"
        subtitle="From stocking your office kitchen to bartending your next event — The Spot has you covered with services that go beyond traditional catering."
        backgroundImage="/images/IMG_4205.jpg"
        ctaText="Get A Quote"
        ctaLink="/contact"
        secondaryCtaText="View Menus"
        secondaryCtaLink="/menus"
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
                <ShoppingBag size={18} />
                <span className="text-sm font-semibold">Corporate Kitchen Stocking</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-6">
                Grab & Go <span className="text-spot-orange">Solutions</span>
              </h2>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Does your office need food options but not a full-service cafe? We&apos;ve got you covered!
                The Spot stocks corporate office spaces with fresh, delicious grab & go items
                for your team&apos;s kitchen or break room.
              </p>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From sandwiches and salads to wraps, snacks, and drinks — we&apos;ll keep your
                grab & go case filled with quality options your team will love. We&apos;ve curated
                our favorite vendors, all <strong className="text-spot-navy">Colorado-based</strong>,
                because we believe in staying local and supporting our community.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {grabGoItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3"
                  >
                    <item.icon size={20} className="text-spot-orange" />
                    <span className="text-sm font-medium text-spot-navy">{item.name}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Stock My Office <ArrowRight size={18} />
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
                  <MapPin className="text-spot-orange" size={28} />
                  <h3 className="font-display text-2xl">Colorado Proud</h3>
                </div>

                <p className="text-gray-300 mb-8">
                  We work exclusively with Colorado-based purveyors because quality matters
                  and community matters more.
                </p>

                <ul className="space-y-4">
                  {grabGoBenefits.map((benefit, index) => (
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
                <ShoppingBag className="text-white" size={24} />
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
              More Than Just Catering
            </h3>
            <p className="text-spot-navy/80 mt-2">
              — Full-service solutions for every corporate need
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
                  src="/images/bartending-cert.png"
                  alt="Colorado Responsible Alcohol Beverage Vendor Training Certificate - Mandy Smith"
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
                  <span className="font-bold text-white text-sm">Certified</span>
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
                  <span className="font-bold text-spot-navy">Cheers!</span>
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
                <Wine size={18} />
                <span className="text-sm font-semibold">Bartending Services</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-6">
                Raise The Bar <span className="text-spot-orange">At Your Event</span>
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Take your corporate events to the next level with professional bartending services.
                Mandy is <strong className="text-spot-navy">Colorado Certified</strong> in Responsible
                Alcohol Beverage Vendor Training — so whether it&apos;s a happy hour, holiday party,
                or client event, you get skilled, professional service with the same excellence
                and fun energy that defines The Spot.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {bartendingServices.map((service, index) => (
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
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Book Bartending <ArrowRight size={18} />
                </Link>
                <Link href="/menus" className="btn-secondary inline-flex items-center gap-2">
                  View Happy Hour Menu <ArrowRight size={18} />
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
              The <span className="text-spot-orange">Royal Treatment</span> Extends
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every service we offer comes with the same values that make The Spot different.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Always On Time',
                description: 'Grab & go stocked on schedule. Bartenders arrive early and ready.',
              },
              {
                icon: Sparkles,
                title: 'Excellence Everywhere',
                description: 'From product selection to service delivery — quality never wavers.',
              },
              {
                icon: Users,
                title: 'We Work With You',
                description: 'Customized solutions that fit your space, team, and budget.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-spot-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="font-display text-xl text-spot-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
              Let&apos;s Talk <span className="text-spot-orange">Services</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need your office kitchen stocked or bartenders for your next event,
              Mandy and the team are ready to help.
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
