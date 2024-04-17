import { useTexture } from "@react-three/drei";
import Moon from "./Moon";
import { memo } from "react";

const Earth = memo(() => {
  const [earthTexture, earthNormalMap, earthSpecMap] = useTexture([
    "/assets/earthTexture.jpg",
    "/assets/earthNormalMap.jpg",
    "/assets/earthSpecMap.jpg",
  ]);
  return (
    // Radius , x , y
    <group position={[8, 0, 0]}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          specularMap={earthSpecMap}
          normalMap={earthNormalMap}
        />
        {/* <ambientLight intensity={2} /> */}
      </mesh>
      <Moon />
    </group>
  );
});
Earth.displayName = "Earth";
export default Earth;
