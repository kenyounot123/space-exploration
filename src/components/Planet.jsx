import { useTexture } from "@react-three/drei";
import Moon from "./Moon";
import { memo, useEffect, useState } from "react";

const Planet = memo(({ handleClick, planetClicked, data }) => {
  const [hovered, setHovered] = useState(false);
  const planet = data;
  const { texture, normalMap, specMap, nightMap } = planet.textures;

  const texturePaths = [
    texture || false,
    normalMap || false,
    specMap || false,
    nightMap || false,
  ];

  const [planetTexture, planetNormalMap, planetSpecMap, planetNightMap] =
    useTexture(texturePaths.filter(Boolean));

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    // Radius , x , y
    <group position={planet.position}>
      <mesh
        onPointerDown={() => handleClick(planet)}
        onPointerOut={() => setHovered(false)}
        onPointerOver={() => setHovered(true)}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={planet.sphereGeomtry} />
        <ambientLight intensity={0.5} />
        <meshPhongMaterial
          map={planetTexture || undefined}
          specularMap={planetSpecMap || undefined}
          normalMap={planetNormalMap || undefined}
          emissiveMap={planetNightMap || undefined}
          shininess={10}
          emissive={0xffffff}
          emissiveIntensity={hovered ? 5 : 0}
        />
      </mesh>
    </group>
  );
});
Planet.displayName = "Planet";
export default Planet;
