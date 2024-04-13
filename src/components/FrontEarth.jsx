import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Earth from "../../public/Earth";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

function FrontEarth() {
  return (
    <div className="earth-canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <directionalLight position={[15, 5, 0]} />
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default FrontEarth;
