'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import { X, ArrowRight, Utensils, Sparkles } from 'lucide-react'

type Category = 'all' | 'grazing' | 'breakfast' | 'lunch' | 'holiday' | 'desserts'

interface GalleryImage {
  src: string
  alt: string
  category: Category[]
  title: string
  description: string
  tall?: boolean
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/live-edge-grazing.jpg',
    alt: 'Live edge wood grazing board with edible flowers',
    category: ['grazing'],
    title: 'Artisan Grazing Board',
    description: 'Stunning live-edge wood board adorned with cheeses, fruits, nuts, and edible flowers.',
    tall: true,
  },
  {
    src: '/images/gallery/charcuterie-cups.jpg',
    alt: 'Individual charcuterie cups',
    category: ['grazing'],
    title: 'Charcuterie Cups',
    description: 'Elegant individual portions perfect for corporate events and cocktail hours.',
  },
  {
    src: '/images/gallery/breakfast-board-parfaits.jpg',
    alt: 'Breakfast board with yogurt parfaits',
    category: ['breakfast'],
    title: 'Parfait Paradise',
    description: 'Yogurt parfaits with fresh berries, granola, pastries, and egg bites.',
  },
  {
    src: '/images/gallery/holiday-wreath-display.jpg',
    alt: 'Holiday wreath appetizer display',
    category: ['holiday', 'grazing'],
    title: 'Holiday Wreath Display',
    description: 'Festive antipasto arranged in a stunning wreath shape with rosemary accents.',
    tall: true,
  },
  {
    src: '/images/gallery/full-menu-spread.jpg',
    alt: 'Full menu spread',
    category: ['lunch'],
    title: 'The Full Spread',
    description: 'Wraps, salads, smoothies, croissants, and more — a complete catering experience.',
  },
  {
    src: '/images/gallery/grazing-table-epic.jpg',
    alt: 'Epic grazing table setup',
    category: ['grazing'],
    title: 'Epic Grazing Table',
    description: 'An Instagram-worthy spread that wows guests before they take a single bite.',
    tall: true,
  },
  {
    src: '/images/gallery/christmas-desserts.jpg',
    alt: 'Christmas dessert display',
    category: ['holiday', 'desserts'],
    title: 'Holiday Sweets',
    description: 'Red velvet cookies, cake pops, truffles, and festive treats.',
  },
  {
    src: '/images/gallery/wrap-trays-variety.jpg',
    alt: 'Variety of wrap trays',
    category: ['lunch'],
    title: 'Wrap It Up',
    description: 'Buffalo chicken, caesar, and more — all beautifully arranged.',
    tall: true,
  },
  {
    src: '/images/gallery/double-grazing-boards.jpg',
    alt: 'Double grazing boards outdoor',
    category: ['grazing'],
    title: 'Al Fresco Boards',
    description: 'Beautiful outdoor setup with brie, grapes, pesto, and fresh herbs.',
  },
  {
    src: '/images/gallery/breakfast-board-croissants.jpg',
    alt: 'Breakfast board with croissants',
    category: ['breakfast'],
    title: 'Rise & Shine Board',
    description: 'Buttery croissants, egg bites, danish pastries, crispy bacon, and fresh fruit.',
  },
  {
    src: '/images/gallery/casino-night-spread.jpg',
    alt: 'Casino night themed event spread',
    category: ['grazing', 'lunch'],
    title: 'Casino Night Spread',
    description: 'High-stakes presentation for an unforgettable themed event.',
    tall: true,
  },
  {
    src: '/images/gallery/couscous-salad.jpg',
    alt: 'Colorful Mediterranean couscous salad',
    category: ['lunch'],
    title: 'Mediterranean Couscous',
    description: 'Vibrant pearl couscous with tomatoes, peppers, feta, and olives.',
  },
  {
    src: '/images/gallery/grab-go-salad.jpg',
    alt: 'Grab and go salad',
    category: ['lunch'],
    title: 'Grab & Go Salads',
    description: 'Fresh, colorful salads ready for busy corporate lunches.',
  },
  {
    src: '/images/gallery/wrap-platter-chips.jpg',
    alt: 'Wrap platter with chips',
    category: ['lunch'],
    title: 'Corporate Wrap Platter',
    description: 'Classic catering done right with variety and presentation.',
  },
  {
    src: '/images/gallery/boxed-lunches-rice.jpg',
    alt: 'Individual boxed rice lunches',
    category: ['lunch'],
    title: 'Boxed Rice Bowls',
    description: 'Individually packaged bowls with protein, rice, and vibrant veggies.',
    tall: true,
  },
  {
    src: '/images/gallery/latte-art.jpg',
    alt: 'Latte art coffee',
    category: ['breakfast'],
    title: 'More Espresso, Less Depresso',
    description: 'Beautiful latte art to start your meeting off right. ☕',
  },
]

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'grazing', label: 'Grazing Boards' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'holiday', label: 'Holiday' },
  { id: 'desserts', label: 'Desserts' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category.includes(activeCategory))

  return (
    <>
      <HeroSection
        title="Feast Your Eyes"
        highlight="On Our Creations"
        subtitle="Every dish tells a story. Every spread is a masterpiece. See why Denver's top companies trust The Spot to make their events unforgettable."
        backgroundImage="/images/gallery/live-edge-grazing.jpg"
        ctaText="Book Your Event"
        ctaLink="/contact"
        secondaryCtaText="View Menus"
        secondaryCtaLink="/menus"
      />

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-spot-orange text-white shadow-lg shadow-spot-orange/30 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-spot-orange/10 hover:text-spot-orange'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    layout: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedImage(image)}
                  className={`relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group ${
                    image.tall ? 'row-span-2' : ''
                  }`}
                >
                  {/* Image Container */}
                  <div className={`relative ${image.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-spot-navy/90 via-spot-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-spot-orange/20 blur-xl" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="font-display text-xl text-white font-bold mb-1">
                        {image.title}
                      </h3>
                      <p className="text-gray-200 text-sm line-clamp-2">
                        {image.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-spot-orange text-sm font-medium mt-3">
                        <Sparkles size={14} /> Click to expand
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Utensils className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500 text-lg">No images in this category yet!</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] cursor-default"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <h3 className="font-display text-2xl text-white font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-400 max-w-xl mx-auto">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-spot-navy to-spot-purple text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Utensils className="mx-auto text-spot-orange mb-6" size={48} />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s craft an unforgettable spread for your next event.
              Your guests won&apos;t just eat — they&apos;ll experience.
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
