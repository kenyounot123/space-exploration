import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Earth from "/public/Earth/Earth.jsx";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
function LoadingIndicator() {
  const cubeRef = useRef();

  // Rotate the cube on each frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef} scale={[1, 1, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="grey" />
    </mesh>
  );
}
function FrontEarth() {
  return (
    <div className="earth-canvas-container">
      <Canvas>
        <Suspense fallback={<LoadingIndicator />}>
          <OrbitControls enableZoom={false} />
          <directionalLight position={[15, 5, 0]} />
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default FrontEarth;
