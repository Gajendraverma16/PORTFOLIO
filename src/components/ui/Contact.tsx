'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [hoveredInput, setHoveredInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative z-10 min-h-screen bg-white text-black py-20 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-black/30"></span>
            <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-black/60">
              Get In Touch
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-lg md:text-xl text-black/70 leading-relaxed">
              Have a project in mind? Let's discuss how I can help bring your ideas to life 
              with modern web technologies.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 pt-8 border-t border-black/10">
              <div>
                <h3 className="text-sm font-medium text-black/40 mb-2 uppercase tracking-wider">Email</h3>
                <a 
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-xl md:text-2xl text-black hover:underline font-medium"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-black/40 mb-2 uppercase tracking-wider">Phone</h3>
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-xl md:text-2xl text-black hover:underline font-medium"
                >
                  +91 {SITE_CONFIG.phone}
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-black/40 mb-2 uppercase tracking-wider">Location</h3>
                <p className="text-xl md:text-2xl text-black font-medium">
                  {SITE_CONFIG.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setHoveredInput('name')}
                  onBlur={() => setHoveredInput(null)}
                  required
                  placeholder="Your name"
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-black/10 text-black text-lg focus:outline-none focus:border-black transition-colors duration-300 placeholder:text-black/40"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setHoveredInput('email')}
                  onBlur={() => setHoveredInput(null)}
                  required
                  placeholder="your@email.com"
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-black/10 text-black text-lg focus:outline-none focus:border-black transition-colors duration-300 placeholder:text-black/40"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setHoveredInput('message')}
                  onBlur={() => setHoveredInput(null)}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-black/10 text-black text-lg focus:outline-none focus:border-black transition-colors duration-300 resize-none placeholder:text-black/40"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-5 bg-black text-white rounded-full text-base md:text-lg font-medium overflow-hidden cursor-none"
              >
                <span className="relative z-10">Send Message</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  Send Message
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
