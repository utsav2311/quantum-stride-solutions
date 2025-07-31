import { Canvas } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingImage = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[4, 3]} />
        <meshBasicMaterial transparent>
          <Html
            transform
            distanceFactor={1}
            position={[0, 0, 0.01]}
            style={{
              width: '400px',
              height: '300px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/lovable-uploads/8a84e587-4e0c-45ab-9606-0873ee3b259f.png"
              alt="Prosthetic runner"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            />
          </Html>
        </meshBasicMaterial>
      </mesh>
    </Float>
  );
};

const About3DImage = () => {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingImage />
      </Canvas>
    </div>
  );
};

export default About3DImage;