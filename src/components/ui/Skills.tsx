'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  },
};

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="relative z-10 min-h-screen bg-[#f5f5f5] text-black py-20 md:py-32 px-6 md:px-12 lg:px-16">
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
              Technical Expertise
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Skills Grid - Large Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12"
        >
          {SKILLS.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-black/5 hover:border-black/10 transition-all duration-500 cursor-none overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCategory === category.id ? 0.03 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-black to-transparent"
              />

              {/* Category Number */}
              {/* <div className="absolute top-8 right-8 text-6xl md:text-7xl font-bold text-black/5 group-hover:text-black/10 transition-colors duration-500">
                {String(category.id).padStart(2, '0')}
              </div> */}

              {/* Category Title */}
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
                  {category.category}
                </h3>
                <div className="w-16 h-[2px] bg-black mt-4"></div>
              </div>

              {/* Skills Flex Wrap */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="px-5 py-2.5 bg-black/10 text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-8 md:mt-12 lg:mt-16"
        >
          <motion.a
            href="/resume.pdf"
            download="Gajendra_Verma_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-black text-white rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-black/90"
          >
            <span>Download Resume</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
