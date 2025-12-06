'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 bg-black text-white py-16 md:py-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Grid - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          
          {/* Column 1 - Links */}
          <div>
            <h3 className="text-[10px] md:text-xs font-medium text-white/40 mb-6 uppercase tracking-widest">
              LINKS
            </h3>
            <ul className="space-y-3">
              {['Home', 'Work', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Socials */}
          <div>
            <h3 className="text-[10px] md:text-xs font-medium text-white/40 mb-6 uppercase tracking-widest">
              SOCIALS
            </h3>
            <ul className="space-y-3">
              <li>
                {/* <a 
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300"
                >
                  gajendraverma353@gmail.com
                </a> */}
              </li>
              <li>
                <a 
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/91${SITE_CONFIG.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a 
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Local Time */}
          <div>
            <h3 className="text-[10px] md:text-xs font-medium text-white/40 mb-6 uppercase tracking-widest">
              LOCAL TIME
            </h3>
            <p className="text-sm md:text-base text-white/70">
              {currentTime || '--:--'} UTC+5:30
            </p>
          </div>

          {/* Column 4 - Version */}
          <div>
            <h3 className="text-[10px] md:text-xs font-medium text-white/40 mb-6 uppercase tracking-widest">
              VERSION
            </h3>
            <p className="text-sm md:text-base text-white/70">
              {SITE_CONFIG.year} © Edition
            </p>
          </div>
        </div>

        {/* Contact Buttons - Top Right */}
        <div className="flex flex-wrap gap-3 mb-20 justify-start md:justify-end">
          <a
            href={`tel:+91${SITE_CONFIG.phone}`}
            className="px-5 py-2.5 border border-white/20 rounded-full text-sm text-white/70 hover:bg-white hover:text-black transition-all duration-300"
          >
            +91{SITE_CONFIG.phone}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="px-5 py-2.5 border border-white/20 rounded-full text-sm text-white/70 hover:bg-white hover:text-black transition-all duration-300"
          >
            {SITE_CONFIG.email}
          </a>
        </div>

        {/* Giant Name in Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center mb-20"
        >
          <h2 className="text-[120px] md:text-[200px] lg:text-[280px] font-bold tracking-tighter leading-none text-white">
            {SITE_CONFIG.shortName}.
          </h2>
        </motion.div>

        {/* Bottom Copyright */}
        <div className="text-center">
          <p className="text-xs text-white/30">
            © {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
