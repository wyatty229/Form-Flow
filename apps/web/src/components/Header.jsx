
import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cms } from "../content/cms";
	const site = cms.site || {};
	const brandName = site.brand?.name || "Form & Flow";
	const primaryCtaLabel = site.nav?.primaryCtaLabel || "Book a Demo";
	const primaryCtaHref = site.nav?.primaryCtaHref || "/contact";
	const links = site.nav?.links || [];


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#F8F9FA]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold text-[#2A2A2A] tracking-tight group-hover:opacity-80 transition-opacity">
              Hostinger <span className="text-[#4A90E2]">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-[#4A90E2]'
                    : 'text-[#2A2A2A] hover:text-[#4A90E2]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/contact"
              className="px-6 py-2.5 text-sm font-medium text-[#4A90E2] border border-[#4A90E2] rounded-full hover:bg-[#F0F7FF] transition-all duration-300"
            >
              Get a Quote
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 text-sm font-medium text-white bg-[#4A90E2] rounded-full hover:bg-[#357ABD] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2A2A2A] hover:text-[#4A90E2] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="py-6 space-y-4 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      isActive(link.path)
                        ? 'text-[#4A90E2] bg-[#F0F7FF]'
                        : 'text-[#2A2A2A] hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 space-y-4 border-t border-gray-100">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 text-center text-sm font-medium text-[#4A90E2] border border-[#4A90E2] rounded-full hover:bg-[#F0F7FF] transition-all"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 text-center text-sm font-medium text-white bg-[#4A90E2] rounded-full hover:bg-[#357ABD] transition-all shadow-sm"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
