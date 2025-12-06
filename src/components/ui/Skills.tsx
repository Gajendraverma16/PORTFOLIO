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
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-black/30"></span>
            <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-black/60">
              Technical Expertise
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-black">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Skills Grid - Large Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {SKILLS.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative bg-white rounded-3xl p-8 md:p-12 border border-black/5 hover:border-black/10 transition-all duration-500 cursor-none overflow-hidden"
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
                <h3 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
                  {category.category}
                </h3>
                <div className="w-12 h-[2px] bg-black mt-4"></div>
              </div>

              {/* Skills Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-3">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="px-4 py-3 bg-black/5 rounded-xl text-sm md:text-base font-medium text-black/80 hover:bg-black hover:text-white transition-all duration-300 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
