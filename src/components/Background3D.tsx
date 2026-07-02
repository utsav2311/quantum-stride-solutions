import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useBackgroundMode } from '@/contexts/BackgroundModeContext';

type BackgroundMode = 'subtle' | 'vivid';

const FloatingShape = ({ position, shape, color, speed, mode }: {
  position: [number, number, number];
  shape: 'sphere' | 'box' | 'torus';
  color: string;
  speed: number;
  mode: BackgroundMode;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'box':
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
      case 'torus':
        return <torusGeometry args={[0.6, 0.2, 16, 32]} />;
      default:
        return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  };

  const isVivid = mode === 'vivid';

  return (
    <Float
      position={position}
      speed={speed}
      rotationIntensity={isVivid ? 0.5 : 0.3}
      floatIntensity={isVivid ? 1 : 0.6}
    >
      <mesh ref={meshRef}>
        {getGeometry()}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isVivid ? 0.6 : 0.15}
          metalness={isVivid ? 0.4 : 0.1}
          roughness={isVivid ? 0.25 : 0.7}
          transparent
          opacity={isVivid ? 0.9 : 0.35}
        />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  const { mode } = useBackgroundMode();
  const isVivid = mode === 'vivid';

  const shapes = useMemo(() => [
    { position: [-8, 4, -5], shape: 'sphere', color: '#3b82f6', speed: 1 },
    { position: [8, -2, -8], shape: 'box', color: '#06b6d4', speed: 0.8 },
    { position: [-5, -4, -6], shape: 'torus', color: '#8b5cf6', speed: 1.2 },
    { position: [6, 3, -10], shape: 'sphere', color: '#10b981', speed: 0.9 },
    { position: [-10, 0, -7], shape: 'box', color: '#f59e0b', speed: 1.1 },
    { position: [10, -6, -9], shape: 'torus', color: '#ef4444', speed: 0.7 },
    { position: [0, 8, -12], shape: 'sphere', color: '#ec4899', speed: 1.3 },
    { position: [4, -8, -6], shape: 'box', color: '#6366f1', speed: 0.6 },
  ], []);

  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none ${isVivid ? 'opacity-90' : 'opacity-50'}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={isVivid ? 0.8 : 0.35} />
        <directionalLight position={[10, 10, 5]} intensity={isVivid ? 1.2 : 0.5} />
        <pointLight position={[-10, -10, -5]} intensity={isVivid ? 0.8 : 0.25} color="#3b82f6" />
        <pointLight position={[10, 10, 5]} intensity={isVivid ? 0.6 : 0.2} color="#f97316" />
        
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.position as [number, number, number]}
            shape={shape.shape as 'sphere' | 'box' | 'torus'}
            color={shape.color}
            speed={shape.speed}
            mode={mode}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default Background3D;
