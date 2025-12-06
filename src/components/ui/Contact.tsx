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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
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
    <section id="contact" className="relative z-10 bg-[#f5f5f5] text-black py-20 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-black/30"></span>
              <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-black/60">
                Get In Touch
              </p>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black mb-8">
              Let's Work Together
            </h2>
            
            <p className="text-base md:text-lg text-black/70 leading-relaxed mb-12">
              Have a project in mind? Let's discuss how I can help bring your ideas to life 
              with modern web technologies.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-black/60 mb-2">Email</h3>
                <a 
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-lg md:text-xl text-black hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-black/60 mb-2">Phone</h3>
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-lg md:text-xl text-black hover:underline"
                >
                  +91 {SITE_CONFIG.phone}
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-black/60 mb-2">Location</h3>
                <p className="text-lg md:text-xl text-black">
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
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black/60 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white border border-black/10 rounded-2xl text-black focus:outline-none focus:border-black transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white border border-black/10 rounded-2xl text-black focus:outline-none focus:border-black transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black/60 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white border border-black/10 rounded-2xl text-black focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-black text-white rounded-full text-base md:text-lg font-medium hover:bg-black/90 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
