
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import CallToAction from '@/components/CallToAction.jsx';

function PricingPage() {
  const pricingTiers = [
    {
      name: 'Basic',
      price: 99,
      description: 'Perfect for getting started with online booking',
      features: [
        'One hosted booking page',
        'Lead capture form',
        'Embed into existing site',
        'Email notifications',
        'Basic analytics',
        'Mobile responsive',
        'Email support'
      ],
      notIncluded: [
        'Custom website design',
        'AI chatbot',
        'Advanced integrations',
        'Priority support',
        'Custom revisions'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Standard',
      price: 299,
      description: 'Most popular for growing businesses',
      features: [
        'Everything in Basic',
        'Redesigned website (up to 5 pages)',
        'AI chatbot integration',
        'Advanced booking features',
        'CRM integration',
        'Smaller revisions included',
        'Priority email support',
        'Monthly analytics reports'
      ],
      notIncluded: [
        'Advanced customization',
        'Unlimited pages',
        'Dedicated account manager'
      ],
      cta: 'Start Free Trial',
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      name: 'Pro',
      price: 599,
      description: 'For businesses that need everything',
      features: [
        'Everything in Standard',
        'Website with 10+ pages',
        'Advanced customization',
        'Multiple AI chatbots',
        'Deeper one-on-one revisions',
        'Custom integrations',
        'Dedicated account manager',
        'Phone & priority support',
        'White-label options'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Website',
      features: [
        { name: 'Hosted booking page', basic: true, standard: true, pro: true },
        { name: 'Custom website design', basic: false, standard: true, pro: true },
        { name: 'Number of pages', basic: '1', standard: 'Up to 5', pro: '10+' },
        { name: 'Mobile responsive', basic: true, standard: true, pro: true },
        { name: 'SEO optimization', basic: false, standard: true, pro: true },
        { name: 'Advanced customization', basic: false, standard: false, pro: true }
      ]
    },
    {
      category: 'Booking & Automation',
      features: [
        { name: 'Online booking system', basic: true, standard: true, pro: true },
        { name: 'Email notifications', basic: true, standard: true, pro: true },
        { name: 'SMS reminders', basic: false, standard: true, pro: true },
        { name: 'AI chatbot', basic: false, standard: '1', pro: 'Multiple' },
        { name: 'Payment processing', basic: false, standard: true, pro: true },
        { name: 'Calendar sync', basic: 'Basic', standard: 'Advanced', pro: 'Advanced' }
      ]
    },
    {
      category: 'Lead Management',
      features: [
        { name: 'Lead capture forms', basic: true, standard: true, pro: true },
        { name: 'CRM integration', basic: false, standard: true, pro: true },
        { name: 'Email automation', basic: false, standard: true, pro: true },
        { name: 'Lead scoring', basic: false, standard: false, pro: true },
        { name: 'Advanced analytics', basic: false, standard: true, pro: true }
      ]
    },
    {
      category: 'Support & Revisions',
      features: [
        { name: 'Email support', basic: true, standard: true, pro: true },
        { name: 'Priority support', basic: false, standard: true, pro: true },
        { name: 'Phone support', basic: false, standard: false, pro: true },
        { name: 'Revisions included', basic: false, standard: 'Smaller', pro: 'Deep' },
        { name: 'Dedicated account manager', basic: false, standard: false, pro: true }
      ]
    }
  ];

  const renderFeatureValue = (value) => {
    if (value === true) {
      return <CheckCircle className="w-6 h-6 text-[#4A90E2] mx-auto" />;
    } else if (value === false) {
      return <X className="w-6 h-6 text-gray-300 mx-auto" />;
    } else {
      return <span className="text-sm font-medium text-gray-700">{value}</span>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Choose Your Perfect Plan | Hostinger Pro</title>
        <meta name="description" content="Transparent pricing for website building, booking pages, and AI chatbots. Choose from Basic, Standard, or Pro plans. Start from $99/month." />
      </Helmet>

      <div className="min-h-screen bg-white text-[#2A2A2A]">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight text-[#2A2A2A]">
                Simple, <span className="text-[#4A90E2]">Transparent Pricing</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative bg-gradient-to-b from-white to-[#F8F9FA] rounded-3xl p-10 border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    tier.highlighted 
                      ? 'border-[#4A90E2] ring-4 ring-[#4A90E2]/10' 
                      : 'border-gray-100 hover:border-[#4A90E2]/30'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute top-0 right-0 bg-[#4A90E2] text-white px-6 py-2 text-sm font-bold rounded-bl-2xl rounded-tr-2xl">
                      {tier.badge}
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#2A2A2A] mb-3">{tier.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{tier.description}</p>
                  </div>
                  
                  <div className="mb-10">
                    <span className="text-6xl font-bold text-[#2A2A2A] tracking-tight">${tier.price}</span>
                    <span className="text-gray-500 text-lg">/month</span>
                  </div>

                  <Link
                    to="/contact"
                    className={`block w-full py-4 px-6 text-center font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-md ${
                      tier.highlighted
                        ? 'bg-[#4A90E2] text-white hover:bg-[#357ABD]'
                        : 'bg-white text-[#4A90E2] border border-[#4A90E2] hover:bg-[#F0F7FF]'
                    }`}
                  >
                    {tier.cta}
                  </Link>

                  <div className="mt-10 space-y-6">
                    <p className="font-bold text-[#2A2A2A] text-sm uppercase tracking-wider">What's included:</p>
                    <ul className="space-y-4">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {tier.notIncluded.length > 0 && (
                      <>
                        <p className="font-bold text-[#2A2A2A] text-sm uppercase tracking-wider pt-4">Not included:</p>
                        <ul className="space-y-4">
                          {tier.notIncluded.map((feature, idx) => (
                            <li key={idx} className="flex items-start opacity-60">
                              <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-6 tracking-tight">
                Compare All Features
              </h2>
              <p className="text-xl text-gray-600">
                See exactly what's included in each plan
              </p>
            </motion.div>

            <div className="overflow-x-auto rounded-3xl shadow-sm border border-gray-200 bg-white">
              <table className="w-full">
                <thead className="bg-white border-b border-gray-200">
                  <tr>
                    <th className="px-8 py-6 text-left font-bold text-[#2A2A2A] text-lg">Features</th>
                    <th className="px-8 py-6 text-center font-bold text-[#2A2A2A] text-lg">Basic</th>
                    <th className="px-8 py-6 text-center font-bold text-[#4A90E2] text-lg bg-[#F0F7FF]">
                      Standard
                    </th>
                    <th className="px-8 py-6 text-center font-bold text-[#2A2A2A] text-lg">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, catIndex) => (
                    <React.Fragment key={catIndex}>
                      <tr className="bg-[#F8F9FA]">
                        <td colSpan="4" className="px-8 py-4 font-bold text-[#2A2A2A] uppercase tracking-wider text-sm">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featIndex) => (
                        <tr key={featIndex} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-8 py-5 text-gray-700 font-medium">{feature.name}</td>
                          <td className="px-8 py-5 text-center">{renderFeatureValue(feature.basic)}</td>
                          <td className="px-8 py-5 text-center bg-[#F0F7FF]/50">{renderFeatureValue(feature.standard)}</td>
                          <td className="px-8 py-5 text-center">{renderFeatureValue(feature.pro)}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-6 tracking-tight">
                Pricing FAQs
              </h2>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-transparent hover:border-gray-200 transition-all">
                <h3 className="font-bold text-[#2A2A2A] text-xl mb-3">Can I switch plans later?</h3>
                <p className="text-gray-600 leading-relaxed">Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              
              <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-transparent hover:border-gray-200 transition-all">
                <h3 className="font-bold text-[#2A2A2A] text-xl mb-3">Is there a setup fee?</h3>
                <p className="text-gray-600 leading-relaxed">No setup fees! The monthly price is all you pay. We believe in transparent, straightforward pricing.</p>
              </div>
              
              <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-transparent hover:border-gray-200 transition-all">
                <h3 className="font-bold text-[#2A2A2A] text-xl mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600 leading-relaxed">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
              </div>
              
              <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-transparent hover:border-gray-200 transition-all">
                <h3 className="font-bold text-[#2A2A2A] text-xl mb-3">Do you offer annual billing?</h3>
                <p className="text-gray-600 leading-relaxed">Yes! Save 20% when you pay annually. Contact us to set up annual billing.</p>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </div>
    </>
  );
}

export default PricingPage;
