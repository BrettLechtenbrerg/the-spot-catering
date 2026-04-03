'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import {
  Heart,
  Award,
  TrendingUp,
  Users,
  ArrowRight,
  Quote,
  Star
} from 'lucide-react'

const timeline = [
  {
    year: 'The Beginning',
    title: 'Sales & Marketing at Crock Spot',
    description: 'Mandy started her journey in the food industry working in sales and marketing, learning the ins and outs of the business.',
    image: '/images/20220528_185532.jpg',
  },
  {
    year: 'The Opportunity',
    title: 'Saw an Empty Cafe',
    description: 'At a catering job, Mandy spotted an empty cafe space. She saw the potential and took the leap — taking "the spot."',
    image: '/images/Char Cups Catering.jpg',
  },
  {
    year: 'Growth',
    title: 'One Became Three',
    description: 'That single location grew into three successful restaurant locations, building a reputation for great food and service.',
    image: '/images/Full Menu photo.jpg',
  },
  {
    year: 'The Pivot',
    title: 'Following Her Passion',
    description: 'Mandy\'s love for catering led to a strategic decision: downsize to one restaurant and focus on what she loved most — making people feel special through creative catering experiences.',
    image: '/images/IMG_4205.jpg',
  },
  {
    year: 'March 2020',
    title: 'One Month Before COVID',
    description: 'The timing seemed impossible. But as the dining landscape changed, Mandy saw opportunity instead of obstacles and rolled with it.',
    image: '/images/20221114_134142.jpg',
  },
  {
    year: 'Today',
    title: 'The Corporate Catering Queen',
    description: 'A thriving woman-owned corporate catering business, serving Denver\'s top companies and creating memorable experiences every day.',
    image: '/images/IMG_4319.jpg',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Make People Feel Special',
    description: 'Every event is an opportunity to create joy and connection through great food.',
  },
  {
    icon: Star,
    title: 'Quality Without Compromise',
    description: 'From ingredients to presentation, we never cut corners on quality.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We\'re proud to be part of Denver\'s business community and love giving back.',
  },
  {
    icon: TrendingUp,
    title: 'Always Growing',
    description: 'We\'re constantly evolving, learning, and finding new ways to delight our clients.',
  },
]

const certifications = [
  { abbr: 'MWBE', name: 'Minority Women\'s Business Enterprise' },
  { abbr: 'DBE', name: 'Disadvantaged Business Enterprise' },
  { abbr: 'EBE', name: 'Emerging Business Enterprise' },
  { abbr: 'SBEC', name: 'Small Business Enterprise Concessionaire' },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Meet The Corporate"
        highlight="Catering Queen"
        subtitle="The story of how one woman's passion for making people feel special turned into Denver's go-to corporate catering company."
        backgroundImage="/images/20220528_185532.jpg"
        ctaText="Work With Us"
        ctaLink="/contact"
      />

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
              &ldquo;We make food fun, social, and special for everyone.&rdquo;
            </p>
            <p className="text-spot-navy/80 mt-4 font-medium">— Mandy Smith, Founder</p>
          </motion.div>
        </div>
      </section>

      {/* Mandy's Story - Timeline Cards */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              Mandy&apos;s <span className="text-spot-orange">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A woman who saw an opportunity, bet on herself, and built something amazing.
            </p>
          </motion.div>

          {/* Timeline Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-xl group h-[350px]"
              >
                {/* Background Image with Greyscale */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale-[60%] group-hover:grayscale-[40%] transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/95 via-spot-navy/70 to-spot-navy/40" />
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
                <div className="absolute top-4 right-4 w-10 h-10 bg-spot-orange rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-spot-navy">{index + 1}</span>
                </div>
              </motion.div>
            ))}
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
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              What We <span className="text-spot-orange">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-spot-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="font-display text-xl text-spot-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
                Certified & <span className="text-spot-orange">Proud</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                As a woman-owned business, we&apos;re proud to hold multiple certifications
                that recognize our commitment to diversity and excellence. Our LLC,
                MNS Worldwide, is a Majority Woman Owned Business.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
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
                src="/images/IMG_28681.jpg"
                alt="The Spot Catering team"
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
              Let&apos;s Create Something <span className="text-spot-orange">Special Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to work with Denver&apos;s Corporate Catering Queen?
              Let&apos;s chat about your next event!
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
