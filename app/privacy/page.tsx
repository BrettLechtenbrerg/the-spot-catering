'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-spot-navy text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-spot-orange transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <Shield className="text-spot-orange" size={40} />
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                Privacy Policy
              </h1>
            </div>
            <p className="text-gray-300">
              Last Updated: April 3, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg prose-gray"
          >
            <p className="lead text-xl text-gray-600 mb-8">
              The Spot Catering (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated by MNS Worldwide LLC,
              is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">1. Information We Collect</h2>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Fill out our contact or quote request forms</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Book catering services with us</li>
              <li>Communicate with us via email, phone, or social media</li>
            </ul>
            <p className="text-gray-600 mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company or organization name</li>
              <li>Event details (date, location, guest count, dietary requirements)</li>
              <li>Billing and payment information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and approximate geographic location</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or source</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Process and fulfill catering orders</li>
              <li>Communicate with you about your events and our services</li>
              <li>Send promotional materials (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website, conducting our business, or serving you (e.g., payment processors, email service providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, safety, or property</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request that we delete your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">7. Colorado Privacy Rights</h2>
            <p className="text-gray-600 mb-4">
              If you are a Colorado resident, the Colorado Privacy Act (CPA) provides you with specific rights regarding your personal data. You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Confirm whether we are processing your personal data</li>
              <li>Access your personal data</li>
              <li>Correct inaccuracies in your personal data</li>
              <li>Delete your personal data</li>
              <li>Obtain a portable copy of your personal data</li>
              <li>Opt out of targeted advertising, sale of personal data, or profiling</li>
            </ul>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. The updated version will be indicated by the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 font-semibold mb-2">The Spot Catering</p>
              <p className="text-gray-600">MNS Worldwide LLC</p>
              <p className="text-gray-600">Denver, Colorado</p>
              <p className="text-gray-600 mt-2">
                <strong>Phone:</strong> <a href="tel:925-699-6629" className="text-spot-orange hover:underline">925-699-6629</a>
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> <a href="mailto:spotcafes@gmail.com" className="text-spot-orange hover:underline">spotcafes@gmail.com</a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/terms"
                className="text-spot-orange hover:underline font-medium"
              >
                View our Terms of Service →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
