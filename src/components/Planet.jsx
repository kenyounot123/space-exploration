import { useTexture } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { memo, useEffect, useState } from "react";

const Planet = memo(({ handleClick, data }) => {
  const [hovered, setHovered] = useState(false);
  const planet = data;
  const { texture, normalMap, specMap, nightMap, ringTexture } =
    planet.textures;

  const texturePaths = [
    texture || false,
    normalMap || false,
    specMap || false,
    nightMap || false,
    ringTexture || false,
  ];
  const [
    planetTexture,
    planetNormalMap,
    planetSpecMap,
    planetNightMap,
    planetRingMap,
  ] = useTexture(texturePaths.filter(Boolean));

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    // Radius , x , y
    <group position={planet.position}>
      <Select enabled={hovered}>
        {planet.name === "Sun" ? (
          <mesh
            onPointerDown={() => handleClick(planet)}
            onPointerOut={() => setHovered(false)}
            onPointerOver={() => setHovered(true)}
            castShadow
            receiveShadow
          >
            <sphereGeometry args={planet.sphereGeometry} />
            <meshPhongMaterial
              map={planetTexture || undefined}
              emissiveMap={planetTexture || undefined}
              emissiveIntensity={0.6}
              emissive={0xffffff}
            />
          </mesh>
        ) : (
          <mesh
            onPointerDown={() => handleClick(planet)}
            onPointerOut={() => setHovered(false)}
            onPointerOver={() => setHovered(true)}
            castShadow
            receiveShadow
          >
            <sphereGeometry args={planet.sphereGeometry} />
            <ambientLight intensity={0.3} />
            <meshPhongMaterial
              map={planetTexture || undefined}
              specularMap={planetSpecMap || undefined}
              normalMap={planetNormalMap || undefined}
              emissiveMap={planetNightMap || undefined}
              shininess={10}
            />
          </mesh>
        )}
        {planet.hasRing && (
          <mesh rotation-x={Math.PI / 2}>
            <torusGeometry args={[3.5, 0.5, 2.5, 100]} />
            <meshPhongMaterial map={planetRingMap} />
          </mesh>
        )}
      </Select>
    </group>
  );
});
Planet.displayName = "Planet";
export default Planet;
