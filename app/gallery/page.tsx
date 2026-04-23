'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import { X, ArrowRight, Utensils, Sparkles, type LucideIcon } from 'lucide-react'
import galleryContent from '@/content/gallery.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  X,
  ArrowRight,
  Utensils,
  Sparkles,
}

type Category = string

interface GalleryImage {
  src: string
  alt: string
  category: Category[]
  title: string
  description: string
  tall?: boolean
}

export default function GalleryPage() {
  const { hero, categories, images, emptyState, hoverCta, finalCta } = galleryContent
  const galleryImages = images as GalleryImage[]

  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category.includes(activeCategory))

  const EmptyIcon = iconMap[emptyState.icon] ?? Utensils
  const HoverIcon = iconMap[hoverCta.icon] ?? Sparkles
  const FinalCtaIcon = iconMap[finalCta.icon] ?? Utensils

  return (
    <>
      <HeroSection
        title={hero.title}
        highlight={hero.highlight}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        secondaryCtaText={hero.secondaryCtaText}
        secondaryCtaLink={hero.secondaryCtaLink}
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
                        <HoverIcon size={14} /> {hoverCta.text}
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
              <EmptyIcon className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500 text-lg">{emptyState.message}</p>
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
            <FinalCtaIcon className="mx-auto text-spot-orange mb-6" size={48} />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {finalCta.headline}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {finalCta.subheadline}
            </p>
            <Link href={finalCta.ctaLink} className="btn-primary inline-flex items-center gap-2">
              {finalCta.ctaText} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
