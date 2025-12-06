'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function ProjectCard({
  title,
  category,
  year,
  isHovered,
  onHover,
  onLeave,
}: ProjectCardProps) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group w-full py-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all hover:bg-gray-900/50 px-4"
    >
      <div className="mb-4 md:mb-0">
        <motion.h3
          animate={{
            x: isHovered ? 20 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-bold text-gray-200 tracking-tight"
        >
          {title}
        </motion.h3>
        <p className="text-indigo-400 mt-2 uppercase tracking-widest text-xs">
          {category}
        </p>
      </div>
      <div className="text-gray-500 font-mono text-sm md:text-base">
        {year}
      </div>
    </motion.div>
  );
}
