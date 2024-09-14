"use client"
// components/ThreeDBoxOnTable.jsx
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

export default function ThreeDBoxOnTable() {
  const boxRef = useRef();

  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [0, 5, 0], fov: 50, rotation: [-Math.PI / 2, 0, 0] }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        {/* Spotlight positioned slightly to the side to cast shadows */}
        <spotLight 
          position={[2, 5, 2]} 
          angle={0.5} 
          penumbra={0.5} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
          shadow-bias={-0.0001}
        />

        {/* Table Top */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[5, 5]} /> {/* A table surface of 5x5 units */}
          <meshStandardMaterial color="#fff" /> {/* Wooden table color */}
        </mesh>

        {/* 3D Box standing vertically on the table */}
        <mesh ref={boxRef} position={[0, 1, 0]} castShadow>
          <boxGeometry args={[0.2, 0.2, 2]} /> {/* X = 20cm, Y = 200cm (height), Z = 20cm */}
          <meshStandardMaterial color="gray" />
        </mesh>
      </Canvas>
    </div>
  );
}
