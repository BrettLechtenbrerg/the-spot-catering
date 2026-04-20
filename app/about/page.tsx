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
  Crown
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
    icon: Clock,
    title: 'Timeliness',
    description: 'Always on time or ahead of schedule, so our clients never have to stress.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We do what we say we will do, when we say we will do it. Period.',
  },
  {
    icon: Smile,
    title: 'Fun & Positivity',
    description: 'We bring a fun, positive demeanor to every client interaction and themed event we create.',
  },
  {
    icon: Handshake,
    title: 'Workability',
    description: 'We work with you and your needs and budget — not the other way around.',
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'From the ease of booking to delicious food to stunning presentation — excellence is everything.',
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    description: 'We can create just about anything for our clients. The sky\'s the limit!',
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
      {/* Custom Hero Section with Featured Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/20220528_185532.jpg"
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
                <span className="text-sm font-medium">Denver&apos;s Corporate Catering Queen</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Meet The Corporate
                <br />
                <span className="text-spot-orange">Catering Queen</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              >
                The Corporate Catering Queen who treats every client like
                <span className="text-spot-orange font-semibold"> royalty</span>.
                This is the story of passion, persistence, and making people feel special.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact" className="btn-primary flex items-center gap-2">
                  Work With Us <ArrowRight size={18} />
                </Link>
                <Link href="/menus" className="btn-outline border-white text-white hover:bg-white hover:text-spot-navy">
                  View Our Menus
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
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/meet-mandy.jpg"
                      alt="Mandy Smith - The Corporate Catering Queen"
                      fill
                      className="object-cover object-top"
                    />
                    {/* Subtle overlay to blend with site colors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/30 to-transparent" />
                  </div>
                  <div className="mt-6 text-center text-white">
                    <p className="font-display text-2xl mb-2">Mandy Smith</p>
                    <p className="text-spot-orange font-semibold">Founder & CEO</p>
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
              &ldquo;We make food fun, social, and special for everyone.&rdquo;
            </p>
            <p className="text-spot-navy/80 mt-4 font-medium">— Mandy Smith, Founder</p>
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
                The Story Behind <span className="text-spot-orange">The Spot</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Every great business starts with a moment of clarity. For Mandy Smith, that moment came
                during a catering job when she spotted an empty cafe space. While others might have seen
                just four walls, Mandy saw <em>opportunity</em>. She saw potential. She saw &quot;the spot.&quot;
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                But Mandy&apos;s journey didn&apos;t start there. She had already spent years in the food industry,
                cutting her teeth in sales and marketing at Crock Spot. It was there she learned not just
                about food, but about <strong className="text-spot-navy">people</strong> — what makes them feel
                welcomed, what makes an event memorable, and most importantly, what makes people feel special.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                When she finally took the leap and claimed that empty cafe, something magical happened.
                One location became two. Then three. Mandy had built not just a business, but a reputation
                for exceptional food and warm, genuine service that Denver couldn&apos;t get enough of.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                But here&apos;s the thing about Mandy — she follows her heart. And her heart kept pulling her
                toward catering. There was something about those corporate events, the team celebrations,
                the holiday parties that lit her up in a way restaurants never quite did. So she made a
                bold decision: <strong className="text-spot-navy">downsize to one restaurant and go all-in on catering</strong>.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The timing? March 2020 — exactly one month before the world changed forever. But where
                others saw disaster, Mandy saw opportunity. As the dining landscape shifted, she pivoted,
                adapted, and actually <em>thrived</em>. She served the National Guard meals for 36 consecutive
                days during the pandemic. She became the go-to caterer for companies navigating the new
                normal of corporate gatherings.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Today, Mandy Smith is known as Denver&apos;s Corporate Catering Queen — and like any good queen,
                she treats her clients like <strong className="text-spot-navy">royalty</strong>. Every event
                receives the royal treatment: always on time, always with integrity, always with that signature
                fun and positivity that makes The Spot different. Her company, MNS Worldwide LLC, is a certified
                MWBE, DBE, EBE, and SBEC — but more than any certification, it&apos;s Mandy&apos;s commitment to
                excellence and creativity that sets The Spot apart.
              </p>

              <p className="text-spot-navy text-xl font-semibold italic">
                &quot;I didn&apos;t just find a spot. I created a place where every client is treated like royalty,
                every event becomes a memory, and every meal becomes a moment worth celebrating.&quot;
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
                    src="/images/meet-mandy.jpg"
                    alt="Mandy Smith - Founder of The Spot Catering"
                    width={400}
                    height={500}
                    className="w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-display text-2xl font-bold">Mandy Smith</p>
                    <p className="text-spot-orange">Founder & CEO</p>
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
                    <p className="font-display text-3xl text-spot-orange font-bold">15+</p>
                    <p className="text-gray-600 text-sm">Years of Experience</p>
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
              The <span className="text-spot-orange">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From sales and marketing to building Denver&apos;s premier corporate catering company — here&apos;s how it all unfolded.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - center on desktop, left on mobile */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-spot-orange via-spot-purple to-spot-navy transform md:-translate-x-1/2" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
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
                          className="object-cover grayscale-[50%] group-hover:grayscale-[15%] transition-all duration-500 group-hover:scale-105"
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
              The <span className="text-spot-orange">Royal Treatment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              As the Corporate Catering Queen, Mandy treats every client like royalty.
              These are the values that make it happen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
