
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-white to-[#F0F7FF] border-t border-[#E0E0E0]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2A2A] mb-6 leading-tight tracking-tight">
            Let's turn your ideas into reality
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of businesses already capturing more leads and booking more customers with our futuristic platform.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-[#4A90E2] rounded-full hover:bg-[#357ABD] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
