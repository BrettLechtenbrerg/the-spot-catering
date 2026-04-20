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
  Sparkles
} from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Team Training Events',
    description: 'Keep your team energized and focused during training sessions with our perfectly timed meal service.',
    image: '/images/20221114_134142.jpg',
  },
  {
    icon: Building2,
    title: 'Board Meetings',
    description: 'Impress stakeholders with premium catering that reflects your company\'s commitment to excellence.',
    image: '/images/IMG_4205.jpg',
  },
  {
    icon: Calendar,
    title: 'Team Appreciation',
    description: 'Show your team they\'re valued with special catering for recognition events and milestones.',
    image: '/images/20220528_185532.jpg',
  },
  {
    icon: Coffee,
    title: 'Breakfast Meetings',
    description: 'Start the day right with our famous breakfast boards and coffee service. More espresso, less depresso!',
    image: '/images/Char Cups Catering.jpg',
  },
  {
    icon: Utensils,
    title: 'Working Lunches',
    description: 'Productive meetings deserve great food. Our boxed lunches and buffets keep things moving.',
    image: '/images/Full Menu photo.jpg',
  },
  {
    icon: Sparkles,
    title: 'Client Events',
    description: 'Make lasting impressions on your clients with catering that shows you care about every detail.',
    image: '/images/IMG_4319.jpg',
  },
]

const whyChooseUs = [
  'Always on time or ahead of schedule — you\'ll never stress about timing',
  'We do what we say, when we say — integrity you can count on',
  'Fun, positive energy that elevates every corporate event',
  'We work with your needs and budget — not the other way around',
  'Excellence from first call to final cleanup',
  'Creative menus for any theme — the sky\'s the limit!',
]

export default function CorporatePage() {
  return (
    <>
      <HeroSection
        title="Corporate Catering"
        highlight="That Hits The Spot"
        subtitle="From team trainings to board meetings, we make corporate events deliciously memorable. Let us handle the food while you focus on business."
        backgroundImage="/images/IMG_4205.jpg"
        ctaText="Request A Quote"
        ctaLink="/contact"
        secondaryCtaText="View Menus"
        secondaryCtaLink="/menus"
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
              We&apos;re <span className="text-spot-orange">Spot On</span> For Any Corporate Event
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whatever your corporate catering needs, we&apos;ve got you covered with professional service and amazing food.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-[320px]"
              >
                {/* Greyscale Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-[70%] transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/95 via-spot-navy/70 to-spot-navy/40 group-hover:from-spot-navy/90 group-hover:via-spot-navy/60 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="w-12 h-12 bg-spot-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-2xl mb-2 group-hover:text-spot-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
                Why Denver Companies Choose <span className="text-spot-orange">The Spot</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We&apos;re not just caterers — we&apos;re your partners in making every corporate event
                a success. We handle the heavy lifting so you can focus on what matters most.
              </p>

              <ul className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
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

              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/IMG_4319.jpg"
                alt="Corporate catering spread"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-spot-navy text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="text-spot-orange" size={32} />
                  <div>
                    <div className="font-display text-lg">Certified</div>
                    <div className="text-sm text-gray-300">MWBE • DBE • EBE</div>
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
              Ready to Elevate Your <span className="text-spot-orange">Corporate Events</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s chat about your upcoming event. We&apos;ll create a custom menu that
              fits your budget, timeline, and taste preferences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request A Quote
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
