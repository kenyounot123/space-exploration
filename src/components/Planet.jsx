import { useTexture } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
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
      <Select enabled={hovered}>
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
          />
        </mesh>
      </Select>
    </group>
  );
});
Planet.displayName = "Planet";
export default Planet;
