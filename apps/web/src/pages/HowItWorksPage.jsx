
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Hammer, 
  Link2, 
  Rocket,
  Code,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import CallToAction from '@/components/CallToAction.jsx';

function HowItWorksPage() {
  const processSteps = [
    {
      step: '01',
      icon: Lightbulb,
      title: 'Strategy & Discovery',
      description: 'We start by understanding your business goals, target audience, and unique needs.',
      details: [
        'Initial consultation call',
        'Business goals analysis',
        'Competitor research',
        'Target audience identification',
        'Feature requirements gathering'
      ],
      duration: '1-2 days'
    },
    {
      step: '02',
      icon: Hammer,
      title: 'Design & Build',
      description: 'Our team creates your custom website with integrated booking and AI features.',
      details: [
        'Custom design mockups',
        'Website development',
        'Booking system setup',
        'AI chatbot training',
        'Mobile optimization',
        'Content integration'
      ],
      duration: '1-3 weeks'
    },
    {
      step: '03',
      icon: Link2,
      title: 'Connect & Integrate',
      description: 'We integrate your existing tools and set up automated workflows.',
      details: [
        'CRM integration',
        'Calendar synchronization',
        'Email automation setup',
        'Payment processing',
        'Analytics configuration',
        'Testing & quality assurance'
      ],
      duration: '3-5 days'
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Go live with full training and ongoing support to ensure your success.',
      details: [
        'Final review & approval',
        'Website launch',
        'Team training session',
        'Documentation provided',
        'Ongoing support',
        'Performance monitoring'
      ],
      duration: 'Ongoing'
    }
  ];

  const embeddingOptions = [
    {
      title: 'Iframe Embedding',
      icon: Code,
      description: 'Embed your booking page directly into your existing website using a simple iframe code.',
      benefits: [
        'Easy to implement',
        'Works with any website platform',
        'Maintains your site\'s design',
        'No technical knowledge required'
      ],
      example: '<iframe src="your-booking-page.com" width="100%" height="600px"></iframe>'
    },
    {
      title: 'Direct Link',
      icon: Link2,
      description: 'Share a standalone booking page link via email, social media, or your website.',
      benefits: [
        'Instant setup',
        'Perfect for social media',
        'Mobile-friendly',
        'Easy to share'
      ],
      example: 'https://book.hostingerpro.com/your-business'
    },
    {
      title: 'Full Website Integration',
      icon: Globe,
      description: 'We build a complete website with booking seamlessly integrated into the design.',
      benefits: [
        'Professional appearance',
        'Consistent branding',
        'Optimized user experience',
        'Better conversion rates'
      ],
      example: 'Custom built to match your brand'
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - Our Process From Strategy to Launch | Hostinger Pro</title>
        <meta name="description" content="Learn how we build your website with booking and AI features. From strategy to launch, we handle everything. Simple embedding options available." />
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
                How <span className="text-[#4A90E2]">It Works</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From strategy to launch, we handle everything. Here's our proven process for building websites that capture leads and book customers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-[#4A90E2]/30 to-transparent"></div>
              
              <div className="space-y-20">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`flex flex-col lg:flex-row items-center gap-12 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 lg:text-right">
                      {index % 2 === 0 && (
                        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center justify-end mb-6">
                            <h3 className="text-3xl font-bold text-[#2A2A2A] tracking-tight">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-8 text-lg leading-relaxed">{step.description}</p>
                          <ul className="space-y-3 mb-8">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center justify-end text-gray-700">
                                <span>{detail}</span>
                                <CheckCircle className="w-5 h-5 text-[#4A90E2] ml-3 flex-shrink-0" />
                              </li>
                            ))}
                          </ul>
                          <div className="inline-block bg-[#F0F7FF] px-6 py-2 rounded-full">
                            <span className="text-sm font-bold text-[#4A90E2] uppercase tracking-wider">Timeline: {step.duration}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Step Number & Icon */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex items-center justify-center w-20 h-20 bg-[#4A90E2] text-white rounded-full font-bold text-2xl shadow-lg mb-6">
                        {step.step}
                      </div>
                      <div className="p-5 bg-white rounded-full shadow-md border border-gray-100">
                        <step.icon className="w-8 h-8 text-[#2A2A2A]" />
                      </div>
                    </div>
                    
                    {/* Content (for odd items) */}
                    <div className="flex-1 lg:text-left">
                      {index % 2 !== 0 && (
                        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center mb-6">
                            <h3 className="text-3xl font-bold text-[#2A2A2A] tracking-tight">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-8 text-lg leading-relaxed">{step.description}</p>
                          <ul className="space-y-3 mb-8">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-3 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="inline-block bg-[#F0F7FF] px-6 py-2 rounded-full">
                            <span className="text-sm font-bold text-[#4A90E2] uppercase tracking-wider">Timeline: {step.duration}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visual Context Section */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-8 tracking-tight">
                  Collaborative Process
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We work closely with you throughout the entire process. You'll have direct access to our team, regular updates, and opportunities to provide feedback at every stage.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-7 h-7 text-[#4A90E2] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-[#2A2A2A] text-lg">Regular Updates</span>
                      <p className="text-gray-600 mt-1">Stay informed with weekly progress reports and milestone notifications.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-7 h-7 text-[#4A90E2] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-[#2A2A2A] text-lg">Your Feedback Matters</span>
                      <p className="text-gray-600 mt-1">We incorporate your input at every stage to ensure the final product exceeds expectations.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-7 h-7 text-[#4A90E2] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-[#2A2A2A] text-lg">Transparent Timeline</span>
                      <p className="text-gray-600 mt-1">Know exactly what to expect and when with our clear project timeline.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" 
                  alt="Team collaboration in modern office workspace"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Embedding Options */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-6 tracking-tight">
                Flexible Embedding Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose how you want to integrate your booking page. We make it easy no matter which option you choose.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {embeddingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-b from-white to-[#F8F9FA] rounded-3xl p-10 border border-gray-100 hover:border-[#4A90E2]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-5 bg-[#4A90E2] rounded-2xl inline-block mb-6 shadow-md">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2A2A2A] mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{option.description}</p>
                  
                  <div className="mb-8">
                    <p className="text-sm font-bold text-[#2A2A2A] mb-4 uppercase tracking-wider">Benefits:</p>
                    <ul className="space-y-3">
                      {option.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <ArrowRight className="w-4 h-4 text-[#4A90E2] mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-gray-100">
                    <p className="text-xs font-mono text-gray-500 break-all">{option.example}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </div>
    </>
  );
}

export default HowItWorksPage;
