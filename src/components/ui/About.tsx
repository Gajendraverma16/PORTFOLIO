'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Full Stack Development',
    description:
      'Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.',
  },
  {
    id: '02',
    title: 'UI/UX Design & Frontend',
    description:
      'Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.',
  },
  {
    id: '03',
    title: 'CRM & SaaS Development',
    description:
      'Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and user management. Ensuring scalability and delivering one-time and recurring subscription solutions.',
  },
];

export default function About() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // state (kept in a ref to avoid re-renders)
  const state = useRef({
    pos: 0, // current translateX in px
    width: 0, // width of one content block (half total, since we duplicate)
    velocity: -60, // current px/sec (negative moves left)
    targetVelocity: -60, // desired px/sec
    lastTs: 0,
  });

  // tuning
  const SMOOTHING = 0.12; // higher -> more inertia (0.02..0.3)
  const MAX_SPEED = 220; // px/sec
  const MIN_SPEED = 30; // baseline speed

  // duplicate block used for seamless wrapping
  const singleBlock = (
    <>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="inline-flex items-center gap-6 pr-10">
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">FULL-STACK DEVELOPER UI & UX DESIGNER FULL-STACK DEVELOPER</span>
          <span className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-yellow-300 flex-shrink-0" />
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">UI & UX DESIGNER FULL-STACK DEVELOPER UI & UX DESIGNER </span>
          <span className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-yellow-300 flex-shrink-0" />
        </div>
      ))}
    </>
  );

  // set up scroll & wheel listeners to update targetVelocity
  useEffect(() => {
    if (typeof window === 'undefined' || !marqueeRef.current) return;

    const el = marqueeRef.current;

    // measure width of one copy (we're duplicating content)
    const measure = () => {
      // total scrollWidth contains both copies; width of one copy = half
      const total = el.scrollWidth || 0;
      state.current.width = total / 2 || total;
    };
    measure();

    // detect scroll direction & speed
    let prevY = window.scrollY;
    let prevTime = performance.now();

    const onScroll = () => {
      const now = performance.now();
      const y = window.scrollY;
      const dy = y - prevY;
      const dt = Math.max(1, now - prevTime) / 1000; // sec
      const scrollSpeed = Math.min(3000, Math.abs(dy) / dt); // px/sec

      if (dy > 0) {
        // scrolling down -> move LEFT
        state.current.targetVelocity = -Math.min(MAX_SPEED, MIN_SPEED + scrollSpeed * 0.02);
      } else if (dy < 0) {
        // scrolling up -> move RIGHT
        state.current.targetVelocity = Math.min(MAX_SPEED, MIN_SPEED + scrollSpeed * 0.02);
      } else {
        // no movement -> slow baseline left
        state.current.targetVelocity = -MIN_SPEED * 0.6;
      }

      prevY = y;
      prevTime = now;
    };

    // wheel gives quicker, snappier input on desktop
    let lastWheelTs = 0;
    const onWheel = (e: WheelEvent) => {
      const now = performance.now();
      if (now - lastWheelTs < 20) return;
      lastWheelTs = now;
      if (e.deltaY > 0) {
        state.current.targetVelocity = -Math.min(MAX_SPEED, MIN_SPEED + Math.abs(e.deltaY) * 3);
      } else if (e.deltaY < 0) {
        state.current.targetVelocity = Math.min(MAX_SPEED, MIN_SPEED + Math.abs(e.deltaY) * 3);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('resize', measure);

    // initial call to set baseline
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', measure);
    };
  }, []);

  // rAF loop to update transform smoothly
  useEffect(() => {
    let rafId = 0;

    const loop = (ts: number) => {
      const s = state.current;
      if (!s.lastTs) s.lastTs = ts;
      const dt = Math.min(0.05, (ts - s.lastTs) / 1000); // cap dt for stability

      // smooth velocity toward target
      s.velocity = s.velocity + (s.targetVelocity - s.velocity) * SMOOTHING;

      // update pos
      s.pos += s.velocity * dt;

      // wrap within [-width, 0] to keep values bounded
      if (s.width) {
        const w = s.width;
        if (s.pos <= -w) s.pos += w;
        if (s.pos >= 0) s.pos -= w;
      }

      // apply GPU friendly transform (text orientation unchanged)
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translate3d(${s.pos}px, 0, 0)`;
      }

      s.lastTs = ts;
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="about" className="relative z-10 bg-white text-black py-16 md:py-28 overflow-hidden">
      {/* Animated Line */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-yellow-300 origin-top"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Full Width Scrolling Text (smooth JS marquee) */}
      <div className="mb-16 md:mb-24 overflow-hidden w-full">
        <div className="relative">
          <div
            ref={marqueeRef}
            className="marquee will-change-transform"
            aria-hidden="true"
            style={{
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              transform: 'translate3d(0,0,0)',
            }}
          >
            <div style={{ display: 'inline-flex' }}>{singleBlock}</div>
            <div style={{ display: 'inline-flex' }}>{singleBlock}</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.55 }}
              className="group relative bg-white/60 p-6 rounded-2xl"
            >
              {/* Number Badge */}
              <div className="mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-yellow-300 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-black">{service.id}</span>
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 tracking-tight">{service.title}</h3>

              {/* Service Description */}
              <p className="text-sm md:text-base text-black/60 leading-relaxed">{service.description}</p>

              {/* Hover Line (subtle) */}
              <div className="mt-6 h-[2px] bg-black/10 group-hover:bg-black transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 gap-8 mt-16 md:mt-24 pt-10 border-t border-black/10"
        >
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">2+</h3>
            <p className="text-sm md:text-base text-black/60">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">10+</h3>
            <p className="text-sm md:text-base text-black/60">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">5+</h3>
            <p className="text-sm md:text-base text-black/60">Happy Clients</p>
          </div>
        </motion.div>
      </div>

      {/* small local styles */}
      <style jsx>{`
        .marquee:focus {
          outline: none;
        }
      `}</style>
    </section>
  );
}
