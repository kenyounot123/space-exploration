import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Background = () => {
  const containerRef = useRef();

  const numStars = 3000;

  // Generate random star positions
  const positions = [];
  for (let i = 0; i < numStars; i++) {
    const x = (Math.random() - 0.5) * 1000; // Adjust as needed
    const y = (Math.random() - 0.5) * 1000; // Adjust as needed
    const z = (Math.random() - 0.5) * 1000; // Adjust as needed
    positions.push(x, y, z);
  }

  // Create BufferGeometry
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  // Vertex shader code
  const vertexShader = `
      uniform float pointSize;
      void main() {
          gl_PointSize = pointSize;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  `;

  // Fragment shader code
  const fragmentShader = `
      void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // White color for stars
      }
  `;

  // Create ShaderMaterial
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      pointSize: { value: 2 }, // Adjust point size as needed
    },
  });

  // Create Points object
  const points = new THREE.Points(geometry, material);

  // Add points to scene
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.add(points);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer's DOM element to the component's container
    containerRef.current.appendChild(renderer.domElement);

    // Create and add 3D objects to the scene (e.g., a background mesh)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Adjust the camera position
    camera.position.z = 5;
    const loader = new GLTFLoader();

    loader.load(
      "src/assets/satellite-model/Aura_27.gltf",
      (gltf) => {
        // Called when the model has loaded
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        // Add the model to your scene
        scene.add(model);
      },
      undefined,
      (error) => {
        // Called if there's an error loading the model
        console.error("Error loading model:", error);
      }
    );

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Clean up Three.js resources when the component unmounts
    return () => {
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className="background-object" />;
};

export default Background;
