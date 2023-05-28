import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';

const Cube = () => {
  const meshRef = useRef();

  // Animation logic
  const animate = () => {
    if (meshRef.current) {
      meshRef.current.rotation.x += Math.random() * 0.005;
      meshRef.current.rotation.y += Math.random() * 0.005;
      meshRef.current.rotation.z += Math.random() * 0.005;
    }
  };

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color={Math.random() * 0xffffff} transparent opacity={0.7} />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(0.5, 0.5, 0.5)]} />
        <lineBasicMaterial color={0x000000} />
      </lineSegments>
    </mesh>
  );
};

const ThreeJs= () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
};

export default ThreeJs;
