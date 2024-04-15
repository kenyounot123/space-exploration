import { Canvas, useFrame } from "@react-three/fiber";
import Moon from "/public/Moon/Moon.jsx";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
function MoonAnimation() {
  const moonRef = useRef();

  useFrame((state, delta) => {
    // Rotate the moon model
    moonRef.current.rotation.y += 0.01 * delta; // Adjust the rotation speed as needed
  });

  return <Moon ref={moonRef} />;
}

function MoonTimeline() {
  return (
    <div className="moon-canvas-container ">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1.5} />
          <Moon />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default MoonTimeline;
