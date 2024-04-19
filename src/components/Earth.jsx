import { useTexture } from "@react-three/drei";
import Moon from "./Moon";
import { memo, useEffect, useState, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
const Earth = memo(({ handleClick, planetClicked }) => {
  const [hovered, setHovered] = useState(false);
  const earthRef = useRef();
  const { camera } = useThree();
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

  function lockCamera() {
    const earthPosition = earthRef.current.position;
    if (planetClicked) {
      const newCameraPosition = new THREE.Vector3(
        earthPosition.x,
        earthPosition.y,
        earthPosition.z + 5
      );

      camera.position.copy(newCameraPosition); // Set the camera's position to the new position
      camera.lookAt(earthPosition);
    }
  }

  return (
    // Radius , x , y
    <group ref={earthRef} position={[8, 0, 0]}>
      <mesh
        onClick={lockCamera}
        onPointerDown={() =>
          handleClick({ title: "Earth", description: "loremfawefawef" })
        }
        onPointerOut={() => setHovered(false)}
        onPointerOver={() => setHovered(true)}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          specularMap={earthSpecMap}
          normalMap={earthNormalMap}
          emissiveMap={earthNightMap}
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
