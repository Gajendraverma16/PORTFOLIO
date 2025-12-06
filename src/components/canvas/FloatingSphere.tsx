'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Slow, elegant rotation
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
    
    // Gentle breathing effect
    const scale = 1 + Math.sin(time * 0.3) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
    
    // Subtle floating motion
    meshRef.current.position.y = Math.sin(time * 0.4) * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[2.5, 128, 128]} position={[2, 0, 0]}>
      <MeshDistortMaterial
        color="#a855f7"
        attach="material"
        distort={0.6}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        envMapIntensity={3}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transparent
        opacity={0.7}
      />
    </Sphere>
  );
}
