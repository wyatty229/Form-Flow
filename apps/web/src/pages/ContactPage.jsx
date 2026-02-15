
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    interestedIn: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const serviceOptions = [
    'Website Building',
    'Hosted Booking Page',
    'AI Chatbots',
    'Lead Capture Platform',
    'Full Package',
    'Not Sure Yet'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.business.trim()) {
      newErrors.business = 'Business name is required';
    }

    if (!formData.interestedIn) {
      newErrors.interestedIn = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Store form data (in a real app, this would send to backend)
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          website: '',
          interestedIn: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      toast({
        title: "Please fix the errors",
        description: "Check the form for validation errors.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@hostingerpro.com',
      description: 'We typically respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9am-6pm EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Business Ave, Suite 100',
      description: 'New York, NY 10001'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Get a Quote or Book a Demo | Hostinger Pro</title>
        <meta name="description" content="Contact Hostinger Pro for a free demo or quote. Fill out our form or call us directly. We're here to help grow your business." />
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
                Let's <span className="text-[#4A90E2]">Get Started</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to transform your business? Fill out the form below or reach out directly. We're excited to hear from you!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-b from-white to-[#F8F9FA] rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#4A90E2]/30"
                >
                  <div className="inline-block p-5 bg-[#4A90E2] rounded-full mb-6 shadow-md">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2A2A2A] mb-3">{info.title}</h3>
                  <p className="text-[#4A90E2] font-bold text-lg mb-2">{info.content}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#2A2A2A] mb-8 tracking-tight">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-[#F0F7FF] border border-[#4A90E2]/20 rounded-3xl p-10 text-center">
                    <CheckCircle className="w-20 h-20 text-[#4A90E2] mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-[#2A2A2A] mb-4">Thank You!</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-[#2A2A2A] mb-3 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 bg-[#F8F9FA] text-[#2A2A2A] border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all ${
                          errors.name ? 'border-red-500' : 'border-transparent hover:border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-[#2A2A2A] mb-3 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 bg-[#F8F9FA] text-[#2A2A2A] border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all ${
                          errors.email ? 'border-red-500' : 'border-transparent hover:border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-[#2A2A2A] mb-3 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 bg-[#F8F9FA] text-[#2A2A2A] border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all ${
                          errors.phone ? 'border-red-500' : 'border-transparent hover:border-gray-300'
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="business" className="block text-sm font-bold text-[#2A2A2A] mb-3 uppercase tracking-wide">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 bg-[#F8F9FA] text-[#2A2A2A] border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all ${
                          errors.business ? 'border-red-500' : 'border-transparent hover:border-gray-300'
                        }`}
                        placeholder="Your Business Name"
                      />
                      {errors.business && <p className="mt-2 text-sm text-red-500">{errors.business}</p>}
                    </div>

                    {/* Website URL */}
                    <div>
                      <label htmlFor="website" className="block text-sm font-bold text-[#2A2A2A] mb-3 uppercase tracking-wide">
                        Website URL (Optional)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-[#F8F9FA] text-[#2A2A2A] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2] hover:border-gray-300 transition-all"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    {/* Interested In */}
                    <div>
                      <label htmlFor="interestedIn" className="block text-sm font-bold text-[#2A2A2A] mb-3 uppercase tracking-wide">
                        Interested In *
                      </label>
                      <select
                        id="interestedIn"
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 bg-[#F8F9FA] text-[#2A2A2A] border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all ${
                          errors.interestedIn ? 'border-red-500' : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.interestedIn && <p className="mt-2 text-sm text-red-500">{errors.interestedIn}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-[#2A2A2A] mb-3 uppercase tracking-wide">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-6 py-4 bg-[#F8F9FA] text-[#2A2A2A] border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2] resize-none transition-all ${
                          errors.message ? 'border-red-500' : 'border-transparent hover:border-gray-300'
                        }`}
                        placeholder="Tell us about your project and goals..."
                      ></textarea>
                      {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-5 bg-[#4A90E2] text-white font-bold text-lg rounded-xl hover:bg-[#357ABD] transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <Send className="w-6 h-6 mr-3" />
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>

              {/* CTA Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-10"
              >
                <div>
                  <h2 className="text-3xl font-bold text-[#2A2A2A] mb-8 tracking-tight">Quick Actions</h2>
                  
                  {/* Book a Demo Card */}
                  <div className="bg-gradient-to-br from-[#4A90E2] to-[#357ABD] rounded-3xl shadow-lg p-10 text-white mb-8">
                    <h3 className="text-2xl font-bold mb-4">Book a Demo</h3>
                    <p className="mb-8 text-white/90 leading-relaxed">
                      See our platform in action with a personalized demo tailored to your business needs.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block px-8 py-4 bg-white text-[#4A90E2] font-bold rounded-full hover:bg-[#F0F7FF] transition-all shadow-md"
                    >
                      Schedule Demo
                    </Link>
                  </div>

                  {/* Get a Quote Card */}
                  <div className="bg-[#2A2A2A] rounded-3xl shadow-lg p-10 text-white">
                    <h3 className="text-2xl font-bold mb-4">Get a Quote</h3>
                    <p className="mb-8 text-gray-300 leading-relaxed">
                      Receive a custom quote based on your specific requirements and business goals.
                    </p>
                    <Link
                      to="/pricing"
                      className="inline-block px-8 py-4 bg-[#4A90E2] text-white font-bold rounded-full hover:bg-[#357ABD] transition-all shadow-md"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="bg-[#F8F9FA] rounded-3xl p-10 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#2A2A2A] mb-6">Why Contact Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#4A90E2] mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">Free consultation to discuss your needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#4A90E2] mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">Custom solutions tailored to your business</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#4A90E2] mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#4A90E2] mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">Fast response time (within 24 hours)</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactPage;
