'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import {
  Coffee,
  Utensils,
  Wine,
  ChefHat,
  ArrowRight,
  CheckCircle,
  Flame
} from 'lucide-react'

const menuCategories = [
  {
    icon: Coffee,
    title: 'Breakfast',
    tagline: 'More Espresso, Less Depresso',
    bgColor: 'bg-spot-orange',
    textColor: 'text-spot-navy',
    accentColor: 'bg-spot-navy',
    items: [
      {
        name: 'Breakfast Buffets',
        description: 'English style with eggs, sausage, roasted potatoes, beans & mushrooms. Or Colorado style with cheesy scrambled eggs, sausage, green chili potatoes & tortillas.',
        price: '$12-15/person',
        image: '/images/20221114_134142.jpg',
      },
      {
        name: 'The Continental Board',
        description: 'A medley of mini croissants, egg bites, fresh fruits, yogurts & granola, cheeses, mini muffins & pastries.',
        price: '$10-12/person',
        image: '/images/Char Cups Catering.jpg',
      },
      {
        name: 'Bagel Board',
        description: 'A delicious spread of fresh bagels with cream cheeses, peanut butter, jam, and ham.',
        price: '$10-12/person',
        image: '/images/IMG_4319.jpg',
      },
      {
        name: 'Breakfast Burrito Board',
        description: 'A medley of meat and vegetarian burritos, served with salsa & our famous sour cream.',
        price: '$10-12/person',
        image: '/images/20220528_185532.jpg',
      },
    ],
  },
  {
    icon: Utensils,
    title: 'Lunch',
    tagline: 'Fuel Your Team',
    bgColor: 'bg-emerald-600',
    textColor: 'text-white',
    accentColor: 'bg-white',
    items: [
      {
        name: 'Lunch Platters',
        description: 'Our signature sandwiches and wraps served family style. Includes your choice of chips or side salad and a cookie.',
        price: '$12-15/person',
        image: '/images/Full Menu photo.jpg',
      },
      {
        name: 'Signature Wraps',
        description: 'Buffalo Chicken, Italian Chop, Crispy Chicken Crunch, Mediterranean Gyro — all packed with flavor and fresh ingredients.',
        price: '$12-15/person',
        image: '/images/IMG_4205.jpg',
      },
      {
        name: 'Premium Hoagies',
        description: 'Roast Beef & Provolone Grinder, Turkey Bacon Avocado, or our famous Garden Veggie Hoagie with hummus and avocado velvet.',
        price: '$12-15/person',
        image: '/images/20240417_110447.jpg',
      },
      {
        name: 'Build-A-Bowl',
        description: 'Choose your base (sesame rice, quinoa, couscous), protein (chicken, pork, beef, tofu), sauce, and toppers. Served via Crock Spot food truck or buffet!',
        price: '$15-17/person',
        image: '/images/Couscous Salad.jpg',
      },
    ],
  },
  {
    icon: Wine,
    title: 'Happy Hour',
    tagline: 'After Hours Magic',
    bgColor: 'bg-spot-purple',
    textColor: 'text-white',
    accentColor: 'bg-spot-orange',
    items: [
      {
        name: 'Charcuterie Boards',
        description: 'Beautifully crafted boards featuring premium meats, artisan cheeses, fresh fruits, nuts, and accompaniments.',
        price: 'Custom pricing',
        image: '/images/AA3DF640-.jpg',
      },
      {
        name: 'Grazing Tables',
        description: 'Stunning, Instagram-worthy displays perfect for larger gatherings. A feast for the eyes and the appetite!',
        price: 'Custom pricing',
        image: '/images/IMG_28681.jpg',
      },
    ],
  },
  {
    icon: ChefHat,
    title: 'BYO Bars',
    tagline: 'Build Your Own Adventure',
    bgColor: 'bg-spot-navy',
    textColor: 'text-white',
    accentColor: 'bg-spot-orange',
    items: [
      {
        name: 'Taco Bar',
        description: 'Street taco tortillas, cilantro lime rice, southwest chicken, ground beef, fajita veggies, all the toppings, chips & guacamole.',
        price: '$12-15/person',
        image: '/images/20220528_185532.jpg',
      },
      {
        name: 'Mediterranean Bar',
        description: 'Build a pita or salad with gyro meat, feta spanakopita, pita bread, Greek olives, hummus, tzatziki, and tabouli salad.',
        price: '$12-15/person',
        image: '/images/Couscous Salad.jpg',
      },
      {
        name: 'BBQ Sandwich Bar',
        description: 'Tangy Carolina pulled pork, smoked chicken or cheddar brats, mac salad, cole slaw, baked beans, corn on the cob, hoagies.',
        price: '$12-15/person',
        image: '/images/20240417_110447.jpg',
      },
      {
        name: 'Soup & Salad Bar',
        description: 'Choice of 2 soups (Tomato Bisque, Chicken Tortilla, Baked Potato, Red Chili) plus a full salad spread with proteins and cornbread.',
        price: '$12-15/person',
        image: '/images/IMG_4205.jpg',
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
                className={`rounded-3xl overflow-hidden shadow-xl ${category.bgColor}`}
              >
                {/* Category Header */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className={`w-16 h-16 ${category.accentColor} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className={category.bgColor === 'bg-spot-orange' ? 'text-spot-navy' : 'text-spot-orange'} size={32} />
                    </motion.div>
                    <div>
                      <h3 className={`font-display text-4xl ${category.textColor} drop-shadow-lg`}>
                        {category.title}
                      </h3>
                      <p className={`${category.textColor} opacity-90 font-medium italic text-lg flex items-center gap-2`}>
                        <Flame size={16} className="text-yellow-300" />
                        {category.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Menu Items Grid with Image Backgrounds */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="relative rounded-2xl overflow-hidden h-[280px] group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        {/* Background Image with Grayscale Effect */}
                        <div className="absolute inset-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover grayscale group-hover:grayscale-[15%] transition-all duration-500 group-hover:scale-105"
                          />
                          {/* Dark Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-display text-2xl group-hover:text-spot-orange transition-colors">
                              {item.name}
                            </h4>
                            <span className="bg-spot-orange text-spot-navy px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
