'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';

// Animation Variants for cleaner code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger effect for items
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Works() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="relative z-10 min-h-screen bg-white text-black py-12 md:py-20 px-6 md:px-12 lg:px-16">
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
              Selected Works
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative block w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 cursor-none" // added cursor-none if you use a custom cursor
            >
              {/* Image with Zoom Effect */}
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                animate={{ 
                  scale: hoveredId === project.id ? 1.05 : 1,
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Dark Overlay - Fades in */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/40 z-10" // Lighter overlay for premium feel
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-between">
                
                {/* Top Right Arrow (Rotates on hover) */}
                <div className="flex justify-end">
                   <motion.div
                    animate={{ 
                        rotate: hoveredId === project.id ? 45 : 0,
                        opacity: hoveredId === project.id ? 1 : 0 
                    }}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                   >
                       <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L13 1M13 1H5M13 1V9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                   </motion.div>
                </div>

                {/* Bottom Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: hoveredId === project.id ? 0 : 20,
                    opacity: hoveredId === project.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-white/80 text-sm font-medium tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                    {project.title}
                  </h3>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}