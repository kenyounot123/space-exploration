import { useTexture } from "@react-three/drei";
import { memo } from "react";
const Sun = memo(() => {
  const [sunTexture] = useTexture(["/assets/sunTexture.jpeg"]);
  return (
    // Radius , x , y
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={sunTexture}
        emissiveMap={sunTexture}
        emissiveIntensity={0.6}
        emissive={0xffffff}
      />
      <pointLight castShadow />
    </mesh>
  );
});
Sun.displayName = "Sun";
export default Sun;
