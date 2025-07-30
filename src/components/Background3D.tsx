import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Torus, Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating medical-themed geometric shapes
const FloatingShape = ({ position, geometry, color }: { position: [number, number, number], geometry: 'sphere' | 'torus' | 'box', color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.001;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.5, 16, 16]} position={position} />;
      case 'torus':
        return <Torus ref={meshRef} args={[0.3, 0.1, 8, 16]} position={position} />;
      case 'box':
        return <Box ref={meshRef} args={[0.4, 0.4, 0.4]} position={position} />;
      default:
        return <Sphere ref={meshRef} args={[0.5, 16, 16]} position={position} />;
    }
  };

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh>
        {renderGeometry()}
        <meshStandardMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </Float>
  );
};

// Particle system for subtle floating particles
const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
      particlesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
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
      <pointsMaterial color="#3b82f6" size={0.05} transparent opacity={0.3} />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      
      {/* Floating medical-themed shapes */}
      <FloatingShape position={[-8, 2, -5]} geometry="sphere" color="#3b82f6" />
      <FloatingShape position={[8, -2, -3]} geometry="torus" color="#06b6d4" />
      <FloatingShape position={[-6, -3, -4]} geometry="box" color="#8b5cf6" />
      <FloatingShape position={[6, 3, -6]} geometry="sphere" color="#10b981" />
      <FloatingShape position={[0, -4, -8]} geometry="torus" color="#f59e0b" />
      <FloatingShape position={[-4, 4, -7]} geometry="box" color="#ef4444" />
      <FloatingShape position={[4, -1, -5]} geometry="sphere" color="#06b6d4" />
      <FloatingShape position={[-2, 1, -6]} geometry="torus" color="#8b5cf6" />
      
      {/* Floating particles */}
      <FloatingParticles />
    </>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Background3D;