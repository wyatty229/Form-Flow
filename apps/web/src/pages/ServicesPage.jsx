
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Server, 
  Calendar, 
  MessageSquare, 
  Target,
  CheckCircle,
  Code,
  Palette,
  Zap,
  Shield,
  Users,
  BarChart,
  Clock,
  Globe,
  Smartphone,
  Mail
} from 'lucide-react';
import CallToAction from '@/components/CallToAction.jsx';

function ServicesPage() {
  const services = [
    {
      id: 'website-building',
      title: 'Website Building',
      icon: Server,
      description: 'Professional, conversion-optimized websites that turn visitors into customers. We build modern, fast, and beautiful websites tailored to your business needs.',
      whatsIncluded: [
        'Custom responsive design',
        'SEO optimization',
        'Fast loading speeds',
        'Mobile-first approach',
        'Content management system',
        'Security features',
        'Analytics integration',
        'Ongoing maintenance'
      ],
      whoItsFor: [
        'Small businesses needing an online presence',
        'Service providers wanting to showcase expertise',
        'E-commerce businesses',
        'Consultants and coaches',
        'Local businesses'
      ],
      useCases: [
        'A fitness coach launching their first website to attract local clients',
        'A restaurant updating their outdated site with online ordering',
        'A consultant building authority with a professional portfolio',
        'A retail store expanding online with e-commerce capabilities'
      ],
      features: [
        { icon: Code, text: 'Clean, modern code' },
        { icon: Palette, text: 'Custom design' },
        { icon: Zap, text: 'Lightning fast' },
        { icon: Shield, text: 'Secure & reliable' }
      ]
    },
    {
      id: 'hosted-booking',
      title: 'Hosted Booking Page',
      icon: Calendar,
      description: 'Let customers book appointments directly from your website, 24/7. Our hosted booking system integrates seamlessly with your calendar and sends automated reminders.',
      whatsIncluded: [
        'Customizable booking page',
        'Calendar synchronization',
        'Automated email reminders',
        'SMS notifications',
        'Payment processing',
        'Easy rescheduling',
        'No-show reduction tools',
        'Booking analytics'
      ],
      whoItsFor: [
        'Service-based businesses',
        'Healthcare providers',
        'Consultants and coaches',
        'Salons and spas',
        'Fitness trainers',
        'Legal professionals'
      ],
      useCases: [
        'A therapist reducing no-shows with automated reminders',
        'A salon accepting bookings 24/7 without phone calls',
        'A consultant streamlining client scheduling across time zones',
        'A personal trainer managing group classes and 1-on-1 sessions'
      ],
      features: [
        { icon: Clock, text: '24/7 booking' },
        { icon: Calendar, text: 'Auto sync' },
        { icon: Mail, text: 'Smart reminders' },
        { icon: BarChart, text: 'Analytics' }
      ]
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots',
      icon: MessageSquare,
      description: 'Intelligent chatbots that answer questions, qualify leads, and engage visitors 24/7. Our AI learns your business and provides personalized responses.',
      whatsIncluded: [
        'Custom AI training',
        'Multi-language support',
        'Lead qualification',
        'Appointment scheduling',
        'FAQ automation',
        'CRM integration',
        'Conversation analytics',
        'Continuous learning'
      ],
      whoItsFor: [
        'Businesses with high inquiry volume',
        'Companies wanting 24/7 support',
        'Sales teams needing lead qualification',
        'Service providers with common questions',
        'International businesses'
      ],
      useCases: [
        'An e-commerce store answering product questions instantly',
        'A SaaS company qualifying leads before sales calls',
        'A real estate agency providing property information 24/7',
        'A healthcare provider answering common patient questions'
      ],
      features: [
        { icon: MessageSquare, text: 'Smart responses' },
        { icon: Users, text: 'Lead qualification' },
        { icon: Globe, text: 'Multi-language' },
        { icon: BarChart, text: 'Insights' }
      ]
    },
    {
      id: 'lead-capture',
      title: 'Lead Capture Platform',
      icon: Target,
      description: 'Capture, organize, and nurture leads with our all-in-one platform. Never lose a potential customer again with automated follow-ups and smart lead scoring.',
      whatsIncluded: [
        'Custom form builder',
        'Lead scoring system',
        'Email automation',
        'CRM integration',
        'Analytics dashboard',
        'A/B testing tools',
        'Lead segmentation',
        'Follow-up automation'
      ],
      whoItsFor: [
        'Sales-driven businesses',
        'Marketing agencies',
        'B2B companies',
        'Real estate professionals',
        'Financial advisors',
        'Educational institutions'
      ],
      useCases: [
        'A B2B company nurturing leads through automated email sequences',
        'A real estate agent capturing and following up with property inquiries',
        'A financial advisor qualifying prospects before consultations',
        'An online course creator building their email list'
      ],
      features: [
        { icon: Target, text: 'Smart capture' },
        { icon: Mail, text: 'Auto follow-up' },
        { icon: BarChart, text: 'Lead scoring' },
        { icon: Users, text: 'Segmentation' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Website Building, Booking, AI Chatbots | Hostinger Pro</title>
        <meta name="description" content="Explore our comprehensive services: professional website building, hosted booking pages, AI chatbots, and lead capture platforms. Everything you need to grow your business." />
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
                Powerful Services to <span className="text-[#4A90E2]">Grow Your Business</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From professional websites to AI-powered automation, we provide everything you need to capture leads and book customers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {services.map((service, index) => (
            <motion.section
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`mb-32 ${index !== services.length - 1 ? 'pb-32 border-b border-gray-100' : ''}`}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Overview */}
                <div>
                  <div className="flex items-center mb-8">
                    <div className="p-5 bg-[#F0F7FF] rounded-2xl mr-6">
                      <service.icon className="w-10 h-10 text-[#4A90E2]" />
                    </div>
                    <h2 className="text-4xl font-bold text-[#2A2A2A] tracking-tight">{service.title}</h2>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-10 leading-loose">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-4 bg-[#F8F9FA] p-5 rounded-xl border border-transparent hover:border-gray-200 transition-all">
                        <feature.icon className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                        <span className="text-base font-medium text-[#2A2A2A]">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 text-white bg-[#4A90E2] rounded-full hover:bg-[#357ABD] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold"
                  >
                    Get Started with {service.title}
                  </Link>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-10">
                  {/* What's Included */}
                  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 hover:shadow-md transition-all duration-300">
                    <h3 className="text-2xl font-bold text-[#2A2A2A] mb-6">What's Included</h3>
                    <ul className="space-y-4">
                      {service.whatsIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-[#4A90E2] mr-4 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who It's For */}
                  <div className="bg-[#F8F9FA] rounded-3xl p-10 border border-transparent hover:border-gray-200 transition-all">
                    <h3 className="text-2xl font-bold text-[#2A2A2A] mb-6">Who It's For</h3>
                    <ul className="space-y-3">
                      {service.whoItsFor.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#4A90E2] mr-3 text-xl">•</span>
                          <span className="text-gray-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example Use Cases */}
                  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 hover:shadow-md transition-all duration-300">
                    <h3 className="text-2xl font-bold text-[#2A2A2A] mb-6">Example Use Cases</h3>
                    <div className="space-y-4">
                      {service.useCases.map((useCase, idx) => (
                        <div key={idx} className="pl-6 border-l-4 border-[#4A90E2]/30">
                          <p className="text-gray-700 text-lg italic">"{useCase}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <CallToAction />
      </div>
    </>
  );
}

export default ServicesPage;
