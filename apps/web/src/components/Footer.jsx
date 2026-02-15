
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-[#F8F9FA] text-[#2A2A2A] border-t border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <span className="text-2xl font-bold tracking-tight">
              Hostinger <span className="text-[#4A90E2]">Pro</span>
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">
              Build websites that capture leads and book customers automatically with our all-in-one platform.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600 hover:text-[#4A90E2] transition-colors">
                <Mail size={18} className="text-[#4A90E2]" />
                <span>hello@hostingerpro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600 hover:text-[#4A90E2] transition-colors">
                <Phone size={18} className="text-[#4A90E2]" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-bold tracking-tight block mb-6">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-600 hover:text-[#4A90E2] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-lg font-bold tracking-tight block mb-6">Services</span>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-[#4A90E2] transition-colors duration-300">
                  Website Building
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-[#4A90E2] transition-colors duration-300">
                  Hosted Booking Page
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-[#4A90E2] transition-colors duration-300">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-[#4A90E2] transition-colors duration-300">
                  Lead Capture Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-lg font-bold tracking-tight block mb-6">Follow Us</span>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-white hover:bg-[#4A90E2] hover:border-[#4A90E2] transition-all duration-300 shadow-sm"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Stay connected for updates, tips, and exclusive offers.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Hostinger Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
