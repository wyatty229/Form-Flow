
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Users, 
  Zap,
  Award,
  TrendingUp,
  Shield,
  Lightbulb
} from 'lucide-react';
import CallToAction from '@/components/CallToAction.jsx';

function AboutPage() {
  const coreValues = [
    {
      icon: Target,
      title: 'Customer Success First',
      description: 'Your success is our success. We measure our performance by the results you achieve, not just the features we deliver.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Excellence',
      description: 'We constantly evolve our platform with the latest technologies to give you a competitive edge in your market.'
    },
    {
      icon: Heart,
      title: 'Transparency & Trust',
      description: 'No hidden fees, no surprises. We believe in honest communication and building long-term relationships.'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'We respect your time. Our streamlined processes get you online fast without compromising quality.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '10K+', label: 'Bookings Processed' },
    { number: '24/7', label: 'Support Available' }
  ];

  const culturalHighlights = [
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Our diverse team of designers, developers, and strategists work together to create exceptional solutions.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth, staying ahead of industry trends to serve you better.'
    },
    {
      icon: Shield,
      title: 'Quality Commitment',
      description: 'Every project undergoes rigorous testing and review to ensure it meets our high standards.'
    },
    {
      icon: Award,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your business growth and revenue.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Our Mission & Values | Hostinger Pro</title>
        <meta name="description" content="Learn about Hostinger Pro's mission to help businesses capture leads and book customers. Discover our values, team culture, and commitment to your success." />
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
                About <span className="text-[#4A90E2]">Hostinger Pro</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're on a mission to help businesses capture more leads and book more customers through intelligent automation and beautiful design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-5xl sm:text-6xl font-bold text-[#4A90E2] mb-3 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-10 text-center tracking-tight">
                Our Story
              </h2>
              <div className="space-y-8 text-xl text-gray-600 leading-loose font-light">
                <p>
                  Hostinger Pro was born from a simple observation: too many businesses were losing customers because their websites couldn't capture leads effectively or make booking easy.
                </p>
                <p>
                  We saw talented professionals, service providers, and small businesses struggling with outdated websites, missed appointments, and leads that slipped through the cracks. They needed a solution that was powerful yet simple, professional yet affordable.
                </p>
                <p>
                  That's why we created Hostinger Pro—an all-in-one platform that combines beautiful website design, intelligent booking systems, and AI-powered automation. We wanted to level the playing field, giving small businesses the same tools that enterprise companies use.
                </p>
                <p>
                  Today, we're proud to serve hundreds of businesses across various industries, helping them capture more leads, reduce no-shows, and grow their revenue. But we're just getting started.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-10 tracking-tight">
                Our Mission
              </h2>
              <div className="bg-white rounded-3xl shadow-lg p-12 border-l-8 border-[#4A90E2]">
                <p className="text-2xl text-gray-700 leading-relaxed italic font-light">
                  "To empower businesses of all sizes with intelligent automation and beautiful design, making it effortless to capture leads, book customers, and grow revenue—so they can focus on what they do best."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
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
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These principles guide everything we do, from product development to customer support.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-b from-white to-[#F8F9FA] rounded-3xl p-10 border border-gray-100 hover:border-[#4A90E2]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="p-4 bg-[#F0F7FF] rounded-2xl mr-6 flex-shrink-0">
                      <value.icon className="w-8 h-8 text-[#4A90E2]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2A2A2A] mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
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
                Our Culture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We've built a team and culture focused on excellence, innovation, and your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {culturalHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className="inline-block p-5 bg-[#F0F7FF] rounded-full mb-6">
                    <highlight.icon className="w-8 h-8 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2A2A2A] mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
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

export default AboutPage;
