'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import {
  Coffee,
  Utensils,
  Wine,
  PartyPopper,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const menuCategories = [
  {
    icon: Coffee,
    title: 'Breakfast',
    tagline: 'More Espresso, Less Depresso',
    items: [
      {
        name: 'Breakfast Boards',
        description: 'A medley of continental style breakfast bites. Pastries, yogurt, fruit, eggs, muffins, cheese, etc. We can design one specifically for your needs.',
      },
      {
        name: 'Breakfast Burrito Platter',
        description: 'House made breakfast burritos, served with salsa & our famous Sriracha Sour Cream. Available flavors: Bacon, Chorizo or Veggie. GF or Vegan options available!',
      },
      {
        name: 'In Room Coffee Service',
        description: 'Drip coffee set up in your room. Includes disposable cups, napkins & sugars and creamers. We can also set up a coffee tab at our Cafe for folks who prefer espresso drinks.',
      },
    ],
  },
  {
    icon: Utensils,
    title: 'Lunch',
    tagline: 'Fuel Your Team',
    items: [
      {
        name: 'Individually Packaged Lunches',
        description: 'After serving the National Guard meals for 36 days straight during the Pandemic, we\'ve got individually packaged meals down. From salads, to wraps, rice bowls, adult lunchables... you name it. Add drinks or desserts!',
      },
      {
        name: 'Buffet Style Lunch',
        description: 'Any of our Cafe Menu options, served in a buffet style. Salad bars, Build your own Rice Bowls, Build your own Wraps, etc.',
      },
    ],
  },
  {
    icon: Wine,
    title: 'Happy Hour',
    tagline: 'After Hours Magic',
    items: [
      {
        name: 'Charcuterie Boards',
        description: 'Beautifully crafted charcuterie and grazing boards, perfect for your after hours meeting or special event.',
      },
      {
        name: 'Grazing Tables',
        description: 'Stunning displays perfect for larger gatherings. A feast for the eyes and the appetite!',
      },
    ],
  },
  {
    icon: PartyPopper,
    title: 'Themed Meals',
    tagline: 'The Sky\'s The Limit',
    items: [
      {
        name: 'Taco & Chili Bars',
        description: 'Build-your-own stations with all the fixings. Perfect for casual team events.',
      },
      {
        name: 'BBQ, Luau, Oktoberfest & More',
        description: 'We\'ve catered hundreds of corporate events and themed parties throughout the years. From BBQ to holidays to international themes.',
      },
    ],
  },
]

const extras = [
  'Drinks & Desserts available to add',
  'GF, Vegan, and allergy accommodations',
  'Custom menus available',
  'Setup and cleanup included',
  'Professional presentation',
  'Flexible delivery times',
]

export default function MenusPage() {
  return (
    <>
      <HeroSection
        title="Our Menus"
        highlight="Something For Everyone"
        subtitle="From breakfast boards to happy hour spreads, we've got delicious options for every occasion and budget."
        backgroundImage="/images/Couscous Salad.jpg"
        ctaText="Get A Custom Quote"
        ctaLink="/contact"
      />

      {/* Menu Categories */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-spot-navy mb-4">
              Catering <span className="text-spot-orange">Menu Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We love creating custom menus tailored to your specific needs — contact us for a personalized quote!
            </p>
          </motion.div>

          <div className="space-y-16">
            {menuCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-spot-navy rounded-xl flex items-center justify-center">
                    <category.icon className="text-spot-orange" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-spot-navy">
                      {category.title}
                    </h3>
                    <p className="text-spot-orange font-medium italic">
                      {category.tagline}
                    </p>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <h4 className="font-display text-xl text-spot-navy mb-3">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 bg-spot-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-display text-3xl text-spot-navy font-bold mb-4">
              What&apos;s Always Included
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {extras.map((extra, index) => (
              <motion.div
                key={extra}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md"
              >
                <CheckCircle className="text-spot-navy" size={18} />
                <span className="text-spot-navy font-medium text-sm">{extra}</span>
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
              Ready to <span className="text-spot-orange">Hit The Spot</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Tell us about your event and we&apos;ll create a custom menu and quote
              that fits your needs perfectly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get A Quote <ArrowRight size={18} />
              </Link>
              <a href="tel:925-699-6629" className="btn-outline border-white text-white hover:bg-white hover:text-spot-navy">
                Call Mandy: 925-699-6629
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
