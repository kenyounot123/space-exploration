import "./App.css";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, lazy, useState, useRef } from "react";
import Loading from "./components/Loading";
import InfoCard from "./components/InfoCard";

const MainContainer = lazy(() => import("./components/MainContainer"));
function App() {
  const [planetClicked, setPlanetClicked] = useState(null);
  const [planet, setPlanet] = useState({});
  const canvasRef = useRef();

  function handleClick(model) {
    setPlanetClicked((planetClicked) => !planetClicked);
    setPlanet({ ...model });
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        {planetClicked && <InfoCard planet={planet} />}
        <Canvas
          ref={canvasRef}
          shadows
          camera={{ fov: 75, near: 0.5, far: 1000, position: [0, 3, 20] }}
        >
          <color attach={"background"} args={["black"]} />
          <OrbitControls />

          <MainContainer
            planetClicked={planetClicked}
            handleClick={handleClick}
          />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
