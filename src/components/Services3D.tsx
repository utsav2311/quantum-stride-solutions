import { Canvas } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ServiceCardProps {
  position: [number, number, number];
  title: string;
  description: string;
  features: string[];
  color: string;
  index: number;
}

const ServiceCard3D = ({ position, title, description, features, color, index }: ServiceCardProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      
      // Hover rotation
      if (hovered) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, flipped ? Math.PI : 0, 0.1);
      }
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Front of card */}
      <group visible={!flipped}>
        <RoundedBox args={[2.5, 3.5, 0.1]} radius={0.1}>
          <meshStandardMaterial color={color} transparent opacity={0.9} />
        </RoundedBox>
        
        {/* Title */}
        <Text
          position={[0, 1.2, 0.06]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {title}
        </Text>
        
        {/* Icon representation */}
        <mesh position={[0, 0.2, 0.06]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="white" transparent opacity={0.8} />
        </mesh>
        
        {/* Click hint */}
        <Text
          position={[0, -1.4, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Click to flip
        </Text>
      </group>

      {/* Back of card */}
      <group visible={flipped} rotation={[0, Math.PI, 0]}>
        <RoundedBox args={[2.5, 3.5, 0.1]} radius={0.1}>
          <meshStandardMaterial color={color} transparent opacity={0.9} />
        </RoundedBox>
        
        {/* Description */}
        <Text
          position={[0, 1, 0.06]}
          fontSize={0.12}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
          textAlign="center"
        >
          {description}
        </Text>
        
        {/* Features */}
        {features.slice(0, 3).map((feature, i) => (
          <Text
            key={i}
            position={[0, 0.2 - i * 0.3, 0.06]}
            fontSize={0.1}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
            textAlign="center"
          >
            • {feature}
          </Text>
        ))}
        
        {/* Back hint */}
        <Text
          position={[0, -1.4, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Click to return
        </Text>
      </group>
    </group>
  );
};

const Services3D = () => {
  const services = [
    {
      title: "Custom Prosthetics",
      description: "State-of-the-art prosthetic limbs designed for optimal function and comfort.",
      features: ["3D Printing Technology", "Lightweight Materials", "Custom Fitting", "Ongoing Support"],
      color: "#3b82f6"
    },
    {
      title: "Orthotic Solutions", 
      description: "Comprehensive orthotic devices to support and improve body function.",
      features: ["Custom Braces", "Foot Orthotics", "Spinal Support", "Sports Orthotics"],
      color: "#06b6d4"
    },
    {
      title: "Expert Consultation",
      description: "Professional assessment and personalized treatment planning.",
      features: ["Initial Assessment", "Treatment Planning", "Progress Monitoring", "Adjustments & Repairs"],
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="services" className="py-20 bg-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Interactive 3D service cards - click to explore our comprehensive care options
          </p>
        </div>
        
        <div className="h-[600px] w-full">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, -5, -5]} intensity={0.5} />
            
            {/* Service Cards */}
            {services.map((service, index) => (
              <ServiceCard3D
                key={index}
                position={[(index - 1) * 3.5, 0, 0]}
                title={service.title}
                description={service.description}
                features={service.features}
                color={service.color}
                index={index}
              />
            ))}
          </Canvas>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Hover over cards and click to flip them for more details
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services3D;