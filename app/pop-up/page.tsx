'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Star,
  Heart,
  Zap
} from 'lucide-react'

const popUpTypes = [
  {
    title: 'Holiday Pop-Ups',
    description: 'Special seasonal experiences around major holidays. Think Valentine\'s treats, Halloween spooky snacks, and festive holiday spreads.',
    icon: Calendar,
    color: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1543934638-bd2e138430c4?w=600&h=400&fit=crop', // Holiday celebration/decorations
  },
  {
    title: 'Community Events',
    description: 'We love being part of local Denver events, festivals, and community gatherings. Great food brings people together!',
    icon: Users,
    color: 'bg-teal-500',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop', // Community festival/gathering
  },
  {
    title: 'Office Building Events',
    description: 'Bring excitement to your building lobby or common areas with a surprise pop-up catering experience.',
    icon: MapPin,
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', // Modern office building lobby
  },
  {
    title: 'Flash Sales & Specials',
    description: 'Follow us on social media for surprise pop-up locations and exclusive one-day-only menu items!',
    icon: Zap,
    color: 'bg-amber-500',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop', // Exciting event energy
  },
]

const benefits = [
  {
    icon: Star,
    title: 'Unique Experience',
    description: 'Pop-ups create buzz and excitement that regular catering can\'t match.',
  },
  {
    icon: Heart,
    title: 'Community Connection',
    description: 'Perfect for building relationships with employees, neighbors, or customers.',
  },
  {
    icon: Sparkles,
    title: 'Memorable Moments',
    description: 'Unexpected food experiences create lasting memories and talking points.',
  },
]

export default function PopUpPage() {
  return (
    <>
      <HeroSection
        title="Pop-Up Events"
        highlight="Surprise & Delight"
        subtitle="From holiday specials to community gatherings, our pop-up events bring unexpected joy and delicious food to any location."
        backgroundImage="/images/20221114_134142.jpg"
        ctaText="Book A Pop-Up"
        ctaLink="/contact"
        secondaryCtaText="Follow Us"
        secondaryCtaLink="https://www.instagram.com/spotcafes/"
      />

      {/* Pop-Up Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              Types of <span className="text-spot-orange">Pop-Up Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring the party to you! Here are some of the pop-up experiences we create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {popUpTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-[240px]"
              >
                {/* Greyscale Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-[50%] transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/95 via-spot-navy/70 to-spot-navy/40 group-hover:from-spot-navy/90 group-hover:via-spot-navy/60 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className={`w-12 h-12 ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <type.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-spot-orange transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-6">
                Why Pop-Ups <span className="text-spot-orange">Work Magic</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                There&apos;s something special about unexpected food experiences.
                Pop-up events create excitement, build community, and give people
                something to talk about.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-spot-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-spot-navy mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
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
                src="/images/Char Cups Catering.jpg"
                alt="Pop-up event catering"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 bg-spot-orange">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl text-spot-navy font-bold mb-4">
              Don&apos;t Miss Our Next Pop-Up!
            </h3>
            <p className="text-spot-navy/80 mb-6 max-w-xl mx-auto">
              Follow us on social media to be the first to know about surprise pop-ups,
              special menus, and exclusive events.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/thespotcafes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-spot-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-spot-navy-light transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/spotcafes/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-spot-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-spot-navy-light transition-colors"
              >
                Instagram
              </a>
            </div>
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
              Want Us to Pop Up at <span className="text-spot-orange">Your Event</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether it&apos;s a company event, community gathering, or special occasion —
              we&apos;d love to bring the pop-up experience to you!
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Let&apos;s Plan Something <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
