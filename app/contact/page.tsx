'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  CheckCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '925-699-6629',
    href: 'tel:925-699-6629',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'spotcafes@gmail.com',
    href: 'mailto:spotcafes@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Denver, Colorado',
    href: null,
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
]

const eventTypes = [
  'Corporate Meeting',
  'Team Training',
  'Board Meeting',
  'Team Appreciation',
  'Themed Event',
  'Holiday Party',
  'Pop-Up Event',
  'Happy Hour',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just show success message
    // In production, this would send to an API
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <HeroSection
        title="Let's Make Your Event"
        highlight="Hit The Spot"
        subtitle="Ready for the royal treatment? Get in touch with Denver's Corporate Catering Queen and let's create something unforgettable together."
        backgroundImage="/images/20240417_110447.jpg"
      />

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="font-display text-3xl text-spot-navy mb-6">
                Get In <span className="text-spot-orange">Touch</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions? Ready to book? Just want to chat about food?
                We&apos;d love to hear from you!
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-spot-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-spot-orange" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{item.title}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-spot-navy font-semibold hover:text-spot-orange transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-spot-navy font-semibold">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-lg text-spot-navy mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/thespotcafes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-spot-navy rounded-xl flex items-center justify-center text-white hover:bg-spot-orange transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/spotcafes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-spot-navy rounded-xl flex items-center justify-center text-white hover:bg-spot-orange transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h3 className="font-display text-2xl text-spot-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thanks for reaching out! Mandy will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-spot-orange font-semibold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="font-display text-2xl text-spot-navy mb-6">
                    Request A Quote
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder="Acme Inc."
                      />
                    </div>

                    {/* Event Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                      >
                        <option value="">Select an event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                      />
                    </div>

                    {/* Guest Count */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Guest Count
                      </label>
                      <input
                        type="number"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder="25"
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell Us About Your Event *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors resize-none"
                        placeholder="Tell us about your event, any dietary requirements, theme ideas, or questions you have..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-12 bg-spot-navy text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl mb-2">
                Need a Quick Answer?
              </h3>
              <p className="text-gray-300">
                Call or text Mandy directly for immediate assistance.
              </p>
            </div>
            <a
              href="tel:925-699-6629"
              className="btn-primary flex items-center gap-2"
            >
              <Phone size={18} />
              925-699-6629
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
