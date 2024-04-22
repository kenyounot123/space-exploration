import { useTexture } from "@react-three/drei";
import Moon from "./Moon";
import { memo, useEffect, useState } from "react";

import Data from "../helpers/data";
const Earth = memo(({ handleClick, planetClicked }) => {
  const [hovered, setHovered] = useState(false);
  const planetData = Data[0];
  const [earthTexture, earthNormalMap, earthSpecMap, earthNightMap] =
    useTexture([
      "/assets/earthTexture.jpg",
      "/assets/earthNormalMap.jpg",
      "/assets/earthSpecMap.jpg",
      "/assets/earthNightMap.jpeg",
    ]);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    // Radius , x , y
    <group position={[8, 0, 0]}>
      <mesh
        onPointerDown={() => handleClick(planetData)}
        onPointerOut={() => setHovered(false)}
        onPointerOver={() => setHovered(true)}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial
          map={earthTexture}
          specularMap={earthSpecMap}
          normalMap={earthNormalMap}
          emissiveMap={earthNightMap}
          shininess={10}
          emissive={0xffffff}
          emissiveIntensity={hovered ? 10 : 0}
        />
      </mesh>
      <Moon />
    </group>
  );
});
Earth.displayName = "Earth";
export default Earth;
