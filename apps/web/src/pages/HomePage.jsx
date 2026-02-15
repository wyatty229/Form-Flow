
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Smartphone, 
  RefreshCw, 
  Server, 
  Calendar, 
  MessageSquare, 
  Target,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight
} from 'lucide-react';
import CallToAction from '@/components/CallToAction.jsx';

function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const trustItems = [
    { icon: Server, text: 'Built on Hostinger' },
    { icon: Zap, text: 'Lightning Fast' },
    { icon: Smartphone, text: 'Mobile-First Design' },
    { icon: RefreshCw, text: 'Easy to Update' }
  ];

  const problemCards = [
    {
      problem: 'Missed Leads',
      outcome: 'Instant Capture',
      description: 'Never lose a potential customer again. Our platform captures every inquiry 24/7.',
      icon: Target
    },
    {
      problem: 'No-Shows',
      outcome: 'Automated Scheduling',
      description: 'Reduce no-shows by 80% with automated reminders and easy rescheduling.',
      icon: Calendar
    },
    {
      problem: 'Slow Follow-Up',
      outcome: 'AI Qualification',
      description: 'AI chatbots qualify leads instantly, so you only talk to ready-to-buy customers.',
      icon: MessageSquare
    }
  ];

  const services = [
    {
      title: 'Website Building',
      description: 'Professional, conversion-optimized websites designed to turn visitors into customers.',
      icon: Server,
      features: ['Custom Design', 'SEO Optimized', 'Fast Loading', 'Mobile Responsive']
    },
    {
      title: 'Hosted Booking Page',
      description: 'Let customers book appointments directly from your website, 24/7.',
      icon: Calendar,
      features: ['Calendar Integration', 'Auto Reminders', 'Payment Processing', 'Easy Embedding']
    },
    {
      title: 'AI Chatbots',
      description: 'Intelligent chatbots that answer questions and qualify leads automatically.',
      icon: MessageSquare,
      features: ['24/7 Availability', 'Lead Qualification', 'Multi-Language', 'Custom Training']
    },
    {
      title: 'Lead Capture Platform',
      description: 'Capture, organize, and nurture leads with our all-in-one platform.',
      icon: Target,
      features: ['Form Builder', 'CRM Integration', 'Email Automation', 'Analytics Dashboard']
    }
  ];

  const timeline = [
    {
      step: '01',
      title: 'Strategy',
      description: 'We analyze your business goals and create a custom plan to maximize conversions.'
    },
    {
      step: '02',
      title: 'Build',
      description: 'Our team designs and develops your website with integrated booking and AI features.'
    },
    {
      step: '03',
      title: 'Connect',
      description: 'We integrate your existing tools and set up automated workflows.'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Go live with full support and training to ensure your success.'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate repetitive tasks and focus on growing your business.'
    },
    {
      icon: Users,
      title: 'More Customers',
      description: 'Convert more visitors into paying customers with optimized funnels.'
    },
    {
      icon: TrendingUp,
      title: 'Increase Revenue',
      description: 'Capture leads 24/7 and never miss a booking opportunity.'
    },
    {
      icon: Shield,
      title: 'Professional Image',
      description: 'Stand out with a modern, trustworthy online presence.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Lightning-fast websites that keep visitors engaged.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Management',
      description: 'Update content, manage bookings, and track leads from one dashboard.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Coach',
      content: 'Hostinger Pro transformed my business. I went from manually scheduling clients to having a fully automated booking system. My revenue increased by 40% in just 3 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Consultant',
      content: 'The AI chatbot qualifies leads while I sleep. I wake up to a list of pre-qualified prospects ready to book. This platform is a game-changer.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Salon Owner',
      content: 'No-shows used to cost me thousands. Now with automated reminders and easy rescheduling, my no-show rate dropped to almost zero. Highly recommend!',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to get my website live?',
      answer: 'Most websites are live within 2-4 weeks, depending on the complexity and your tier. We work efficiently while ensuring quality and your satisfaction.'
    },
    {
      question: 'Can I integrate with my existing tools?',
      answer: 'Yes! We integrate with popular CRMs, email marketing platforms, payment processors, and calendar systems. If you have a specific tool, let us know and we\'ll make it work.'
    },
    {
      question: 'Do I need technical knowledge to manage my site?',
      answer: 'Not at all! Our platform is designed for non-technical users. We provide training and ongoing support to help you manage everything easily.'
    },
    {
      question: 'What if I need changes after launch?',
      answer: 'All plans include ongoing support. Standard and Pro tiers include regular updates and revisions. We\'re here to help your site evolve with your business.'
    },
    {
      question: 'How does the AI chatbot work?',
      answer: 'Our AI chatbot is trained on your business information and can answer common questions, qualify leads, and even schedule appointments. It learns and improves over time.'
    },
    {
      question: 'Can I cancel or upgrade my plan?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. We offer flexible month-to-month billing with no long-term contracts required.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Hostinger Pro - Websites That Capture Leads & Book Customers</title>
        <meta name="description" content="Build modern websites with hosted booking pages and AI chatbots. Capture leads 24/7 and automate customer scheduling with Hostinger Pro." />
      </Helmet>

      <div className="min-h-screen bg-white text-[#2A2A2A]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#F0F7FF] to-white overflow-hidden py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-[#2A2A2A]">
                A website that captures leads and books customers{' '}
                <span className="text-[#4A90E2] relative inline-block">
                  for you
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#4A90E2]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                Modern website building + hosted booking pages + AI chatbots. 
                Everything you need to turn visitors into customers, automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="px-10 py-4 text-lg font-semibold text-white bg-[#4A90E2] rounded-full hover:bg-[#357ABD] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/pricing"
                  className="px-10 py-4 text-lg font-semibold text-[#4A90E2] bg-white border border-[#4A90E2] rounded-full hover:bg-[#F0F7FF] transition-all duration-300"
                >
                  See Pricing
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Abstract Background Elements */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4A90E2]/10 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* Trust Row */}
        <section className="bg-white border-y border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-12"
            >
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="p-4 bg-[#F0F7FF] rounded-2xl mb-4 group-hover:bg-[#4A90E2] transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-[#4A90E2] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-base font-semibold text-[#2A2A2A] tracking-wide">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Problem to Outcome Section */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-6 tracking-tight">
                Turn Problems Into Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stop losing customers to common business challenges. Our platform solves them automatically.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12"
            >
              {problemCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-10 border border-gray-100 hover:border-[#4A90E2]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mb-8">
                    <card.icon className="w-8 h-8 text-[#4A90E2]" />
                  </div>
                  <div className="mb-6 flex items-center flex-wrap gap-2">
                    <span className="text-red-400 line-through text-lg font-medium">{card.problem}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                    <span className="text-green-500 font-bold text-lg">{card.outcome}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
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
                Everything You Need
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Powerful tools that work together seamlessly to grow your business.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-b from-white to-[#F8F9FA] rounded-3xl p-8 border border-gray-100 hover:border-[#4A90E2]/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2A2A2A] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4A90E2] mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className="py-24 bg-[#F8F9FA] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-6 tracking-tight">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From strategy to launch, we handle everything so you can focus on your business.
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-[#4A90E2]/30 to-transparent"></div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-16"
              >
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex flex-col md:flex-row items-center gap-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 text-center md:text-right">
                      {index % 2 === 0 && (
                        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                          <h3 className="text-2xl font-bold text-[#2A2A2A] mb-4">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-[#F0F7FF] rounded-full shadow-lg">
                      <span className="text-[#4A90E2] font-bold text-xl">{item.step}</span>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      {index % 2 !== 0 && (
                        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                          <h3 className="text-2xl font-bold text-[#2A2A2A] mb-4">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Choose Hostinger Pro
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses already growing with our platform.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#F8F9FA] rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <benefit.icon className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2A2A2A] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-6 tracking-tight">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real results from real businesses like yours.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-10"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#4A90E2] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 italic leading-relaxed text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#F0F7FF] rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-[#4A90E2]">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#2A2A2A]">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Got questions? We've got answers.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F8F9FA] rounded-2xl overflow-hidden border border-transparent hover:border-gray-200 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-[#2A2A2A] text-lg pr-8">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-8 pt-2">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CallToAction />
      </div>
    </>
  );
}

export default HomePage;
