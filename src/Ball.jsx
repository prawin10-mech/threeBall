import { useEffect, useState, useRef } from "react";
import {
  OrbitControls,
  Environment,
  Stage,
  ContactShadows,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Ball = () => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls />
      <ContactShadows />
      <Environment preset="city" background receiveShadows />
      <mesh ref={cubeRef} position={[2, 0, 0]} castShadow>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" metalness={2} roughness={0.2} />
      </mesh>
    </>
  );
};

export default Ball;
