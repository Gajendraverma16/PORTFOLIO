'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

const iconMap = {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Mail,
};

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-white text-black py-20 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-light tracking-tight mb-8"
          >
            LET&apos;S TALK
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl mb-8 max-w-md"
          >
            Have a project in mind? Let&apos;s create something extraordinary together.
          </motion.p>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 border border-gray-300 rounded-full transition-all hover:bg-black hover:text-white"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-sm"
        >
          <p>© {SITE_CONFIG.year} {SITE_CONFIG.author}. All rights reserved.</p>
          <p className="mt-1">Built with Next.js, Tailwind & Three.js</p>
        </motion.div>
      </div>
    </footer>
  );
}
