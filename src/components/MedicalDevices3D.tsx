import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Prosthetic Leg Model
const ProstheticLeg = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Upper leg component */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.15, 0.12, 1.5]} />
        <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Knee joint */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.18]} />
        <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Lower leg component */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.12, 0.1, 1.2]} />
        <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Ankle joint */}
      <mesh position={[0, -1.2, 0]}>
        <sphereGeometry args={[0.12]} />
        <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Foot */}
      <mesh position={[0, -1.35, 0.2]}>
        <boxGeometry args={[0.3, 0.15, 0.8]} />
        <meshStandardMaterial color="#374151" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
};

// Prosthetic Arm Model
const ProstheticArm = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + 1) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Upper arm */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.08, 1]} />
        <meshStandardMaterial color="#059669" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Elbow joint */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.12]} />
        <meshStandardMaterial color="#047857" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Forearm */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.08, 0.06, 0.8]} />
        <meshStandardMaterial color="#059669" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Wrist joint */}
      <mesh position={[0, -0.8, 0]}>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial color="#047857" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Hand */}
      <mesh position={[0, -0.95, 0]}>
        <boxGeometry args={[0.15, 0.08, 0.25]} />
        <meshStandardMaterial color="#374151" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Fingers */}
      {[-0.06, -0.02, 0.02, 0.06].map((x, i) => (
        <mesh key={i} position={[x, -0.95, 0.12]}>
          <boxGeometry args={[0.02, 0.04, 0.15]} />
          <meshStandardMaterial color="#374151" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
};

// Orthotic Brace Model
const OrthoticBrace = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3 + 2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main brace structure */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 1.8]} />
        <meshStandardMaterial color="#7c3aed" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Support straps */}
      {[-0.6, -0.2, 0.2, 0.6].map((y, i) => (
        <mesh key={i} position={[0, y, 0.1]}>
          <boxGeometry args={[0.4, 0.05, 0.02]} />
          <meshStandardMaterial color="#5b21b6" metalness={0.3} roughness={0.7} />
        </mesh>
      ))}
      
      {/* Adjustment mechanisms */}
      {[-0.4, 0, 0.4].map((y, i) => (
        <mesh key={i} position={[0.12, y, 0]}>
          <sphereGeometry args={[0.04]} />
          <meshStandardMaterial color="#4c1d95" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
};

interface DeviceDisplayProps {
  device: 'leg' | 'arm' | 'brace';
  title: string;
  description: string;
  features: string[];
}

const DeviceDisplay = ({ device, title, description, features }: DeviceDisplayProps) => {
  const [autoRotate, setAutoRotate] = useState(true);

  const renderDevice = () => {
    switch (device) {
      case 'leg':
        return <ProstheticLeg position={[0, 0, 0]} />;
      case 'arm':
        return <ProstheticArm position={[0, 0, 0]} />;
      case 'brace':
        return <OrthoticBrace position={[0, 0, 0]} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden">
      <div className="h-80 relative">
        <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          
          {renderDevice()}
          
          <OrbitControls 
            autoRotate={autoRotate}
            autoRotateSpeed={2}
            enablePan={false}
            maxDistance={8}
            minDistance={2}
          />
        </Canvas>
        
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-primary/90 transition-colors"
        >
          {autoRotate ? 'Manual' : 'Auto'}
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const MedicalDevices3D = () => {
  const devices = [
    {
      device: 'leg' as const,
      title: 'Custom Prosthetic Leg',
      description: 'Advanced prosthetic leg with articulating knee and ankle joints, designed for natural movement and comfort.',
      features: ['Titanium Frame', 'Hydraulic Knee', 'Carbon Fiber Foot', 'Microprocessor Control']
    },
    {
      device: 'arm' as const,
      title: 'Myoelectric Prosthetic Arm',
      description: 'State-of-the-art prosthetic arm with individual finger control and natural grip patterns.',
      features: ['EMG Control', 'Individual Fingers', 'Sensory Feedback', 'Waterproof Design']
    },
    {
      device: 'brace' as const,
      title: 'Spinal Orthotic Brace',
      description: 'Custom-fitted spinal brace providing optimal support while maintaining mobility and comfort.',
      features: ['Custom Molded', 'Breathable Materials', 'Adjustable Support', 'Low Profile Design']
    }
  ];

  return (
    <section id="devices" className="py-20 bg-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Interactive 3D Models</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our medical devices in detail. Drag to rotate, scroll to zoom, and toggle auto-rotation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {devices.map((device, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{animationDelay: `${index * 200 + 300}ms`}}>
              <DeviceDisplay {...device} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Use your mouse or touch to interact with the 3D models above
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>🖱️ Drag to rotate</span>
            <span>🔍 Scroll to zoom</span>
            <span>⚙️ Toggle auto-rotation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalDevices3D;