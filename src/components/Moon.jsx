import { useTexture } from "@react-three/drei";
import { memo } from "react";
const Moon = memo(() => {
  const [moonTexture] = useTexture(["/assets/moonTexture.jpeg"]);
  return (
    // Radius , x , y
    <mesh castShadow receiveShadow position={[4, 0, 0]}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshPhongMaterial map={moonTexture} />
      <ambientLight intensity={2} />
    </mesh>
  );
});
Moon.displayName = "Moon";
export default Moon;
