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
  CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import contactContent from '@/content/contact.json'

// Icon mapping — converts JSON string to Lucide component
const iconMap: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
  Clock,
}

export default function ContactPage() {
  const { hero, getInTouch, contactInfo, social, form, success, quickContact } = contactContent

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
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
        title={hero.title}
        highlight={hero.highlight}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
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
                {getInTouch.headlineLine1} <span className="text-spot-orange">{getInTouch.headlineHighlight}</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {getInTouch.body}
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => {
                  const Icon = iconMap[item.icon] ?? Phone
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-spot-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-spot-orange" size={24} />
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
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-lg text-spot-navy mb-4">{social.heading}</h3>
                <div className="flex gap-4">
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-spot-navy rounded-xl flex items-center justify-center text-white hover:bg-spot-orange transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href={social.instagram}
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
                    {success.heading}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {success.body}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-spot-orange font-semibold hover:underline"
                  >
                    {success.buttonLabel}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="font-display text-2xl text-spot-navy mb-6">
                    {form.heading}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {form.fields.name.label}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder={form.fields.name.placeholder}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {form.fields.email.label}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder={form.fields.email.placeholder}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {form.fields.phone.label}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder={form.fields.phone.placeholder}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {form.fields.company.label}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder={form.fields.company.placeholder}
                      />
                    </div>

                    {/* Event Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {form.fields.eventType.label}
                      </label>
                      <select
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                      >
                        <option value="">{form.fields.eventType.placeholder}</option>
                        {form.eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {form.fields.eventDate.label}
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {form.fields.guestCount.label}
                      </label>
                      <input
                        type="number"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                        placeholder={form.fields.guestCount.placeholder}
                      />
                    </div>

                    {/* Estimated Budget */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {form.fields.budget.label}
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors"
                      >
                        <option value="">{form.fields.budget.placeholder}</option>
                        {form.budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {form.fields.message.label}
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spot-orange focus:border-spot-orange transition-colors resize-none"
                        placeholder={form.fields.message.placeholder}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    {form.submitLabel}
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
                {quickContact.heading}
              </h3>
              <p className="text-gray-300">
                {quickContact.subtext}
              </p>
            </div>
            <a
              href={`tel:${quickContact.phoneNumber}`}
              className="btn-primary flex items-center gap-2"
            >
              <Phone size={18} />
              {quickContact.phoneLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
