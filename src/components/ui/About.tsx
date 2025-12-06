'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function About({
  name = 'Gajendra Verma',
  role = 'Full Stack Developer',
  description = [
    'MERN-stack developer with hands-on experience building high-performance web apps.',
    'Experienced in React, Next.js, Node.js, MongoDB, REST APIs, WebSockets and SEO-friendly builds.',
    'I focus on clean UI, fast load times and pragmatic architecture that scales.',
  ],
  stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects', value: '10+' },
    { label: 'Happy Clients', value: '5+' },
  ],
  photoSrc = '/your-photo.jpg',
}) {
  return (
    <section
      id="about"
      className="relative z-10 bg-white text-black py-16 md:py-28 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left - Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeLeft}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-black/30" aria-hidden></span>
              <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-black/60">
                About Me
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {role}
            </h2>

            <div className="space-y-3 text-sm md:text-base text-black/75 leading-relaxed">
              {description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 md:gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold">{s.value}</h3>
                  <p className="text-xs md:text-sm text-black/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg border border-black/10 px-5 py-2 text-sm font-medium hover:shadow-lg transition-shadow"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-block rounded-lg bg-black text-white px-5 py-2 text-sm font-medium shadow-sm hover:opacity-95 transition-opacity"
              >
                See Projects
              </a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeRight}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace Image component src with your actual photo path */}
              <Image
                src={photoSrc}
                alt={`${name} - profile photo`}
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover"
                priority
              />
            </div>

            {/* decorative card */}
            <div className="hidden md:block absolute -bottom-6 -right-10 w-36 h-36 rounded-2xl bg-gradient-to-tr from-black/5 to-black/2 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
