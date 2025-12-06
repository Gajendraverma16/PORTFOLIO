'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import MagneticButton from './MagneticButton';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MagneticButton>
      <motion.button
        onClick={toggleTheme}
        className="p-3 rounded-full border border-current hover:opacity-60 transition-opacity"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Moon size={18} className="text-black" />
        ) : (
          <Sun size={18} className="text-white" />
        )}
      </motion.button>
    </MagneticButton>
  );
}
