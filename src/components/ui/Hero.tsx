'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const wordVariants = {
    hidden: { y: 50, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] as const },
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }
    },
  };

  const mobileLinkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({ 
      y: 0, 
      opacity: 1, 
      transition: { delay: 0.1 + i * 0.1, duration: 0.5 } 
    }),
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden text-black">
      
      {/* --- NAVBAR --- */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-50">
        <a href="#home" className="text-2xl font-bold tracking-tighter hover:opacity-60 transition-opacity z-50 relative">
          GV.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {['Home', 'About', 'Work'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="group relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">{item}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 p-2 focus:outline-none"
        >
          <div className="w-6 flex flex-col items-end gap-1.5 group">
             <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} className="h-[2px] w-full bg-black block transition-all" />
             <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} className="h-[2px] w-2/3 bg-black block group-hover:w-full transition-all" />
             <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} className="h-[2px] w-full bg-black block transition-all" />
          </div>
        </button>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {/* Mobile Menu Links */}
            <div className="flex flex-col items-center gap-6">
              {['Home', 'About', 'Work'].map((item, i) => (
                <motion.a
                  key={item}
                  custom={i}
                  variants={mobileLinkVariants}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-light tracking-tight group relative overflow-hidden"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
                  <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-purple-600">{item}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 mt-8"
            >
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black border border-black rounded-full flex items-center justify-center text-white hover:bg-transparent hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black border border-black rounded-full flex items-center justify-center text-white hover:bg-transparent hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black border border-black rounded-full flex items-center justify-center text-white hover:bg-transparent hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO CONTENT --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-2 md:gap-6 px-4 text-center max-w-5xl"
      >
        <motion.div variants={wordVariants} className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-black/30 md:w-12"></span>
            <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-black/60">
              Hi! I'm Gajendra
            </p>
            <span className="w-8 h-[1px] bg-black/30 md:w-12"></span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            variants={wordVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-black leading-[1.1]"
          >
            Full-stack Developer
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            variants={wordVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-black/80 italic leading-[1.1]"
          >
            & Web Designer.
          </motion.h2>
        </div>

        <motion.div variants={wordVariants} className="mt-8 md:mt-12">
          <a href="#work" className="inline-block px-8 py-4 bg-black text-white rounded-full">
            <span className="group relative overflow-hidden inline-block">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full text-sm font-medium">View My Work</span>
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-sm font-medium whitespace-nowrap">View My Work</span>
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* --- LEFT SIDE - SOCIAL ICONS (FIXED) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-10"
      >
        <SocialLink href="https://linkedin.com" label="LinkedIn">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </SocialLink>
        <SocialLink href="https://github.com" label="GitHub">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </SocialLink>
        <SocialLink href="https://instagram.com" label="Instagram">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </SocialLink>
      </motion.div>

      {/* --- BOTTOM SCROLL MOUSE ANIMATION (Replaces the vertical text) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-black rounded-full"
          />
        </div>
      </motion.div>

    </section>
  );
}

// Fixed Helper Component - Normal state is filled, hover is outlined
function SocialLink({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-black border border-black rounded-full flex items-center justify-center text-white hover:bg-transparent hover:text-black transition-all duration-300"
    >
      {children}
    </a>
  );
}