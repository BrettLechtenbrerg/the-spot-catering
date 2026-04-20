'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Truck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Award,
  Utensils,
  Star,
  FileCheck,
  Leaf,
  ChefHat,
  Zap
} from 'lucide-react'

const menuHighlights = [
  {
    title: 'Build-A-Bowl',
    description: 'Choose your base, protein, sauce, and toppings. Served in 25 seconds or less!',
    icon: Utensils,
  },
  {
    title: 'Breakfast Options',
    description: 'English & Colorado style buffets, continental boards, bagel boards, and breakfast burritos.',
    icon: ChefHat,
  },
  {
    title: 'BYO Bars',
    description: 'Taco, tostada, nacho, chili, and mac n cheese bars with all the fixings.',
    icon: Star,
  },
  {
    title: 'Grazing Tables',
    description: 'Stunning charcuterie spreads with cheeses, fruits, crackers, and hot appetizers.',
    icon: Leaf,
  },
]

const whyCrockSpot = [
  {
    icon: Clock,
    title: 'Lightning Fast Service',
    description: 'Our quick-serve concept serves guests in 25 seconds or less — perfect for time-sensitive events.',
  },
  {
    icon: Users,
    title: 'High Volume Capacity',
    description: 'We can serve up to 100 people per hour from our food trucks. No long lines, no waiting.',
  },
  {
    icon: FileCheck,
    title: 'Government Contract Ready',
    description: 'Fully equipped to handle government contracts with proper certifications and compliance.',
  },
  {
    icon: Truck,
    title: 'Mobile Convenience',
    description: '15 years of food truck experience. We bring the kitchen to you — anywhere in Denver Metro.',
  },
]

const serviceTypes = [
  { name: 'Food Truck Service', price: '$16-18/person', description: 'Our signature mobile experience' },
  { name: 'Buffet Style', price: '$18-20/person', description: 'Indoor setup with full service' },
  { name: 'Breakfast Buffets', price: '$15-17/person', description: 'English or Colorado style' },
  { name: 'Lunch Boxes', price: '$17.50/person', description: 'Grab-n-go artisan boxes' },
]

export default function CrockSpotPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/crockspot-truck.jpg"
            alt="Crock Spot Food Truck"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F2744]/95 via-[#2F2744]/85 to-[#2F2744]/70" />
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
                className="mb-8"
              >
                <Image
                  src="/images/crock-spot-logo-white.png"
                  alt="Crock Spot - Slow Cooked Gourmet Cuisine"
                  width={350}
                  height={150}
                  className="w-auto h-auto max-w-[350px]"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl text-[#F49220] font-bold mb-4"
              >
                Let Us Crock Your World
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              >
                Voted <span className="text-[#F49220] font-semibold">&quot;Best Food Truck in Denver&quot;</span> by 5280 Magazine.
                Slow-cooked gourmet cuisine that fills you up without bogging you down.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="mailto:Steven@thecrockspot.com"
                  className="bg-[#F49220] text-[#2F2744] px-8 py-4 rounded-lg font-bold hover:bg-[#F49220]/90 transition-colors inline-flex items-center gap-2"
                >
                  Book Crock Spot <ArrowRight size={18} />
                </a>
                <a
                  href="https://www.thecrockspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#2F2744] transition-colors"
                >
                  Visit Website
                </a>
              </motion.div>
            </motion.div>

            {/* Featured Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center text-white mb-6">
                  <Award className="mx-auto text-[#F49220] mb-4" size={48} />
                  <p className="font-display text-2xl font-bold">Award-Winning</p>
                  <p className="text-[#F49220]">Food Truck Catering</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <Truck className="text-[#F49220]" size={24} />
                    <span>15+ Years Food Truck Experience</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <Zap className="text-[#F49220]" size={24} />
                    <span>100 People Per Hour Capacity</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <FileCheck className="text-[#F49220]" size={24} />
                    <span>Government Contract Ready</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-[#F49220] rounded-2xl shadow-xl p-4"
              >
                <Star className="text-white" size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Family Connection Banner */}
      <section className="py-12 bg-spot-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-display text-2xl md:text-3xl text-spot-navy font-bold">
              A Family Affair — Steven &amp; Mandy Smith
            </p>
            <p className="text-spot-navy/80 mt-2">
              Crock Spot is owned by Steven Smith, husband of The Spot&apos;s own Mandy Smith.
              Two great catering options, one family passion for great food!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Crock Spot */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              Why Choose <span className="text-[#F49220]">Crock Spot</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, delicious, and built for high-volume events. Perfect for corporate gatherings,
              government contracts, and large-scale catering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCrockSpot.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#614B8A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="font-display text-xl text-spot-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-6">
                The <span className="text-[#F49220]">Crock Spot Menu</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our &quot;choose your own adventure&quot; concept lets guests customize their perfect meal.
                Slow-cooked proteins over healthy grain bases, topped with international sauces.
                All dietary needs welcome — including vegetarian and vegan options!
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {menuHighlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                  >
                    <item.icon className="text-[#F49220] mb-3" size={28} />
                    <h4 className="font-display text-lg text-spot-navy mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
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
              <div className="bg-[#2F2744] rounded-3xl p-8 text-white">
                <h3 className="font-display text-2xl mb-6 text-center">Service Options</h3>
                <div className="space-y-4">
                  {serviceTypes.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center bg-white/10 rounded-xl p-4"
                    >
                      <div>
                        <p className="font-semibold">{service.name}</p>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                      <span className="text-[#F49220] font-bold">{service.price}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-center text-gray-400 text-sm mt-6">
                  Custom menus available for any event size
                </p>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-[#F49220] rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Truck className="text-white" size={20} />
                  <span className="font-bold text-white text-sm">Mobile!</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government & Corporate Ready */}
      <section className="py-16 bg-[#614B8A]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <FileCheck className="mx-auto mb-4" size={48} />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Government Contract Ready
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              Crock Spot is fully equipped to handle government contracts and large-scale corporate events.
              We have the capacity, the certifications, and 15+ years of experience delivering
              high-volume catering with precision timing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 px-6 py-3 rounded-full">
                <span className="font-semibold">100+ People/Hour</span>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
                <span className="font-semibold">25-Second Service</span>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
                <span className="font-semibold">Flexible Locations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2F2744] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-[#F49220]">Crock</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether it&apos;s a corporate lunch, government event, or community gathering —
              Crock Spot brings award-winning food truck catering to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:Steven@thecrockspot.com"
                className="bg-[#F49220] text-[#2F2744] px-8 py-4 rounded-lg font-bold hover:bg-[#F49220]/90 transition-colors inline-flex items-center gap-2"
              >
                Email Steven@thecrockspot.com
              </a>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-[#2F2744]">
                Contact The Spot
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
