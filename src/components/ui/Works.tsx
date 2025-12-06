'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';

export default function Works() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="works" className="relative z-10 min-h-screen bg-[#f5f5f5] text-black py-32 px-8 md:px-12">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="text-gray-600 text-xs uppercase tracking-[0.3em] font-light mb-4">
          Selected Works
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black">
          Recent Projects
        </h2>
      </motion.div>

      {/* Projects List */}
      <div className="space-y-0">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="border-t border-gray-800 py-8 md:py-12 cursor-pointer group"
            style={{
              opacity: hoveredId && hoveredId !== project.id ? 0.3 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* Project Title */}
              <motion.h3
                animate={{
                  x: hoveredId === project.id ? 20 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-black"
              >
                {project.title}
              </motion.h3>

              {/* Project Info */}
              <div className="flex gap-8 text-gray-600 text-xs md:text-sm font-light">
                <span className="uppercase tracking-wider">{project.category}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
