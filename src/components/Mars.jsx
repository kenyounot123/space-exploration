import { useTexture } from "@react-three/drei";
import { memo } from "react";
const Mars = memo(() => {
  const [marsTexture] = useTexture(["/assets/marsTexture.jpeg"]);
  return (
    // Radius , x , y
    <mesh castShadow receiveShadow position={[-4, 0, 0]}>
      <sphereGeometry args={[0.7, 64, 64]} />
      <meshPhongMaterial map={marsTexture} />
      <ambientLight intensity={2} />
    </mesh>
  );
});
Mars.displayName = "Mars";
export default Mars;
