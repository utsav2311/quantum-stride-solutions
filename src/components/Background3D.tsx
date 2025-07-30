import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple floating shape component with proper Three.js structure
const FloatingShape = ({ position, type, color }: { position: [number, number, number], type: 'sphere' | 'box' | 'torus', color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.2;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'sphere':
        return <sphereGeometry args={[0.5, 16, 16]} />;
      case 'box':
        return <boxGeometry args={[0.6, 0.6, 0.6]} />;
      case 'torus':
        return <torusGeometry args={[0.4, 0.15, 8, 16]} />;
      default:
        return <sphereGeometry args={[0.5, 16, 16]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial color={color} transparent opacity={0.15} />
    </mesh>
  );
};

// Floating particles system
const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const particleCount = 30;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#3b82f6" size={0.03} transparent opacity={0.4} />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} />
      
      {/* Floating shapes */}
      <FloatingShape position={[-6, 2, -4]} type="sphere" color="#3b82f6" />
      <FloatingShape position={[6, -1, -3]} type="box" color="#06b6d4" />
      <FloatingShape position={[-4, -2, -5]} type="torus" color="#8b5cf6" />
      <FloatingShape position={[4, 3, -4]} type="sphere" color="#10b981" />
      <FloatingShape position={[0, -3, -6]} type="box" color="#f59e0b" />
      <FloatingShape position={[-2, 1, -5]} type="torus" color="#ef4444" />
      
      {/* Floating particles */}
      <FloatingParticles />
    </>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Background3D;