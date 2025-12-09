'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsMounted(true);

    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using EmailJS for newsletter
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_kzwv33e',
          template_id: 'template_ystx71q',
          user_id: 'G85ZqlPfPHlZYBBVg',
          template_params: {
            from_email: email,
            to_email: SITE_CONFIG.email,
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative z-10 bg-black text-white py-16 md:py-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating Particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * 500;
            const randomDuration = Math.random() * 10 + 10;
            const randomDelay = Math.random() * 5;
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: randomX,
                  y: randomY,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                }}
              />
            );
          })}
        </div>
      )}

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top Section - 4 Columns + Contact Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-32">
          
          {/* Left Side - 4 Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-1">
            
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
                      className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300 block"
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
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/91${SITE_CONFIG.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300 block"
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
              <p className="text-sm md:text-base text-white/70 font-mono">
                {currentTime || '--:--'} <span className="text-white/40">UTC+5:30</span>
              </p>
            </div>

            {/* Column 4 - Version */}
            <div>
              <h3 className="text-[10px] md:text-xs font-medium text-white/40 mb-6 uppercase tracking-widest">
                VERSION
              </h3>
              <p className="text-sm md:text-base text-white/70 font-mono">
                {SITE_CONFIG.year} © Edition
              </p>
            </div>
          </div>

          {/* Right Side - Contact Buttons */}
          <div className="flex flex-col gap-4 lg:items-end">
            <Magnetic>
              <a
                href={`tel:+91${SITE_CONFIG.phone}`}
                className="inline-block px-8 py-4 border border-white/20 rounded-full text-sm text-white hover:bg-white hover:text-black transition-all duration-300 text-center whitespace-nowrap"
              >
                +91 {SITE_CONFIG.phone}
              </a>
            </Magnetic>
            
            <Magnetic>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-block px-8 py-4 border border-white/20 rounded-full text-sm text-white hover:bg-white hover:text-black transition-all duration-300 text-center"
              >
                {SITE_CONFIG.email}
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-24 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-white/60 mb-6">Get notified about new projects and articles</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className={`px-8 py-3 rounded-full font-medium transition-colors ${
                isSubmitting
                  ? 'bg-white/50 text-black/50 cursor-not-allowed'
                  : submitStatus === 'success'
                  ? 'bg-green-500 text-white'
                  : submitStatus === 'error'
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              {isSubmitting
                ? 'Subscribing...'
                : submitStatus === 'success'
                ? '✓ Subscribed!'
                : submitStatus === 'error'
                ? 'Try Again'
                : 'Subscribe'}
            </motion.button>
          </form>
          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-400 mt-3"
            >
              Thanks for subscribing! Check your email.
            </motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400 mt-3"
            >
              Oops! Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.div>

        {/* Giant Name in Center */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center mb-20 select-none"
        >
          <h2 className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[240px] xl:text-[280px] font-bold tracking-tighter leading-none text-white">
            {SITE_CONFIG.shortName}.
          </h2>
        </motion.div> */}

        {/* Bottom Copyright */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-xs text-white/30 uppercase tracking-widest">
            © {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
