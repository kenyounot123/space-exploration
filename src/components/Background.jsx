import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Star = () => {
  // Generate a random position for the star
  const x = (Math.random() - 0.5) * 1000;
  const y = (Math.random() - 0.5) * 1000;
  const z = (Math.random() - 0.5) * 1000;

  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[0.4, 15, 3]} />
      <meshBasicMaterial color={0xffffff} />
    </mesh>
  );
};

const StarrySky = () => {
  const stars = [];

  // Generate a certain number of stars
  for (let i = 0; i < 1000; i++) {
    stars.push(<Star key={i} />);
  }

  return <>{stars}</>;
};
function Background() {
  return (
    <div className="canvas-container">
      <Canvas className="satellite-model">
        <StarrySky />
      </Canvas>
    </div>
  );
}
export default Background;
