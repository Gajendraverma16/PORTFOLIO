'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/ui/Hero';
import Works from '@/components/ui/Works';
import Footer from '@/components/layout/Footer';

// Lazy load 3D scene for better performance
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-transparent" />,
});

export default function Home() {
  return (
    <main className="relative bg-[#f5f5f5] min-h-screen w-full text-black">
      <Scene />
      <Hero />
      <Works />
      <Footer />
    </main>
  );
}
