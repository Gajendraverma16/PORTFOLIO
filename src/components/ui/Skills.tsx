'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 bg-[#f5f5f5] text-black py-20 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-black mb-6">
            Technology Arsenal
          </h2>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {SKILLS.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                {category.category}
              </h3>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.05,
                      duration: 0.4 
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2.5 bg-white text-black rounded-full text-sm md:text-base font-medium border border-black/10 hover:bg-black hover:text-white hover:border-black hover:shadow-lg transition-all duration-300 cursor-none"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
