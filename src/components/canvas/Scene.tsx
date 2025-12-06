'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import FloatingSphere from './FloatingSphere';

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Colorful lighting for iridescent effect */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ff6b9d" />
          <directionalLight position={[-5, -5, 5]} intensity={1.5} color="#4ecdc4" />
          <pointLight position={[0, 5, 0]} intensity={1.5} color="#ffd93d" />
          <pointLight position={[0, -5, 0]} intensity={1.5} color="#a855f7" />
          
          {/* HDR environment for reflections */}
          <Environment preset="sunset" />
          
          <FloatingSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
