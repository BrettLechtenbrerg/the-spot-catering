'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export default function TermsOfServicePage() {
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
              <FileText className="text-spot-orange" size={40} />
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                Terms of Service
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
              Welcome to The Spot Catering. These Terms of Service (&quot;Terms&quot;) govern your use of our
              website and catering services. By accessing our website or engaging our services, you agree
              to be bound by these Terms. Please read them carefully.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using our website at the-spot-catering.vercel.app (the &quot;Site&quot;) or engaging
              our catering services, you agree to be bound by these Terms of Service and all applicable laws
              and regulations. If you do not agree with any of these terms, you are prohibited from using
              this site or our services.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">2. Catering Services</h2>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">2.1 Service Area</h3>
            <p className="text-gray-600 mb-4">
              The Spot Catering primarily serves the Denver, Colorado metropolitan area. Service availability
              for locations outside our primary service area will be determined on a case-by-case basis and
              may be subject to additional fees.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">2.2 Quotes and Pricing</h3>
            <p className="text-gray-600 mb-4">
              All quotes provided are estimates based on the information provided at the time of inquiry.
              Final pricing will be confirmed in a written agreement or invoice. Prices are subject to change
              based on menu modifications, guest count changes, or additional services requested.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">2.3 Minimum Orders</h3>
            <p className="text-gray-600 mb-4">
              Certain services may require minimum order quantities or minimum spend amounts. These requirements
              will be communicated during the quote process.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">3. Booking and Deposits</h2>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">3.1 Reservations</h3>
            <p className="text-gray-600 mb-4">
              Event dates are not confirmed until a signed agreement and required deposit are received.
              We recommend booking at least 2-4 weeks in advance for corporate events, though we will
              accommodate last-minute requests when possible.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">3.2 Deposits</h3>
            <p className="text-gray-600 mb-4">
              A deposit may be required to secure your event date. Deposit amounts and payment terms will
              be specified in your catering agreement. Deposits are generally non-refundable but may be
              applied to rescheduled events at our discretion.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">3.3 Final Payment</h3>
            <p className="text-gray-600 mb-4">
              Final payment is typically due prior to or on the day of the event, as specified in your
              agreement. We accept various forms of payment including credit cards, checks, and electronic
              transfers.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">4. Cancellation Policy</h2>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">4.1 Client Cancellation</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>More than 14 days before event:</strong> Full refund minus deposit</li>
              <li><strong>7-14 days before event:</strong> 50% of total order value</li>
              <li><strong>Less than 7 days before event:</strong> 100% of total order value</li>
            </ul>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">4.2 Changes to Orders</h3>
            <p className="text-gray-600 mb-4">
              Final guest counts and menu selections must be confirmed at least 72 hours before your event.
              Changes made after this deadline may result in additional charges or may not be possible to
              accommodate.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">4.3 Force Majeure</h3>
            <p className="text-gray-600 mb-4">
              Neither party shall be liable for failure to perform due to circumstances beyond reasonable
              control, including but not limited to natural disasters, severe weather, government actions,
              pandemics, or other acts of God.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">5. Food Safety and Allergies</h2>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">5.1 Food Safety</h3>
            <p className="text-gray-600 mb-4">
              We adhere to all applicable food safety regulations and best practices. Our kitchen facilities
              are licensed and inspected by the appropriate health authorities.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">5.2 Allergies and Dietary Restrictions</h3>
            <p className="text-gray-600 mb-4">
              We accommodate dietary restrictions and allergies when notified in advance. However, our kitchen
              handles common allergens including nuts, dairy, gluten, and shellfish. While we take precautions,
              we cannot guarantee a completely allergen-free environment. Guests with severe allergies should
              exercise caution.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">5.3 Leftovers</h3>
            <p className="text-gray-600 mb-4">
              Once food has been delivered and served, we are not responsible for its storage or safety.
              Leftovers should be refrigerated promptly and consumed within appropriate timeframes.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">6. Liability</h2>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">6.1 Limitation of Liability</h3>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, The Spot Catering and MNS Worldwide LLC shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages arising from
              or related to your use of our services.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">6.2 Maximum Liability</h3>
            <p className="text-gray-600 mb-4">
              Our total liability for any claim arising from our services shall not exceed the total amount
              paid by you for the specific event giving rise to the claim.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">6.3 Venue Responsibility</h3>
            <p className="text-gray-600 mb-4">
              The client is responsible for ensuring the event venue is suitable for catering services,
              including adequate access, electricity, and facilities as needed. We are not responsible for
              damage caused by venue conditions or third parties.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content on this website, including text, images, logos, and designs, is the property of
              The Spot Catering and MNS Worldwide LLC or its licensors. You may not reproduce, distribute,
              or create derivative works without our prior written consent.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">8. Website Use</h2>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">8.1 Accuracy of Information</h3>
            <p className="text-gray-600 mb-4">
              We strive to keep our website information accurate and up-to-date. However, we do not warrant
              that all information on the site is complete, accurate, or current. Menu items, prices, and
              availability are subject to change without notice.
            </p>

            <h3 className="font-display text-xl text-spot-navy mt-8 mb-3">8.2 Prohibited Uses</h3>
            <p className="text-gray-600 mb-4">
              You agree not to use this website for any unlawful purpose, to solicit others to perform
              unlawful acts, to violate any regulations, to infringe upon our intellectual property rights,
              or to interfere with the security features of the site.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">9. Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You agree to indemnify and hold harmless The Spot Catering, MNS Worldwide LLC, and our
              officers, directors, employees, and agents from any claims, damages, losses, or expenses
              arising from your breach of these Terms or your use of our services.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of
              Colorado, without regard to its conflict of law provisions. Any disputes arising from these
              Terms or our services shall be resolved in the courts of Denver, Colorado.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately
              upon posting to this website. Your continued use of our website or services after any changes
              constitutes acceptance of the modified Terms.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">12. Severability</h2>
            <p className="text-gray-600 mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall
              be limited or eliminated to the minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>

            <h2 className="font-display text-2xl text-spot-navy mt-12 mb-4">13. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
                href="/privacy"
                className="text-spot-orange hover:underline font-medium"
              >
                View our Privacy Policy →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
