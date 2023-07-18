import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Ball = () => {
  const bigSphereRadius = 2;
  const smallSphereRadius = 0.1;
  const movementRadius = 1;
  const movementSpeed = 0.01;

  const [spherePosition, setSpherePosition] = useState([
    bigSphereRadius + movementRadius,
    0,
    0,
  ]);

  const updatePosition = (x, y, z) => {
    if (z > 3) z = 3;
    setSpherePosition([x, y, z]);
  };

  return (
    <>
      <ambientLight color="red" />
      <perspectiveCamera position={[6, 1, 10]} />
      <spotLight position={spherePosition} color="green" />
      <mesh
        position={spherePosition}
        scale={smallSphereRadius}
        onPointerMove={(e) => updatePosition(e.point.x, e.point.y, e.point.z)}
      >
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#fff" metalness={2} roughness={0.2} />
      </mesh>
    </>
  );
};

export default Ball;
