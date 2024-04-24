import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  Selection,
  Outline,
  EffectComposer,
} from "@react-three/postprocessing";
import { Suspense, lazy, useState, useRef } from "react";
import Loading from "./components/Loading";
import InfoCard from "./components/InfoCard";

const MainContainer = lazy(() => import("./components/MainContainer"));
function App() {
  // State that tells us whether a planet was clicked or not
  const [planetClicked, setPlanetClicked] = useState(null);
  // Sstate that tells us which planet was clicked
  const [planet, setPlanet] = useState({});
  const canvasRef = useRef();

  // When planet is clicked, mesh is passed in as parameter
  function handleClick(model) {
    setPlanetClicked(true);
    setPlanet({ ...model });
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        {planetClicked && (
          <InfoCard planet={planet} onClick={() => setPlanetClicked(false)} />
        )}
        <Canvas
          ref={canvasRef}
          shadows
          camera={{ fov: 75, near: 0.5, far: 1000, position: [10, 10, 5] }}
        >
          <color attach={"background"} args={["black"]} />
          <OrbitControls makeDefault />
          <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
              <Outline
                blur
                visibleEdgeColor="white"
                edgeStrength={10}
                width={1500}
              />
            </EffectComposer>
            <MainContainer handleClick={handleClick} />
          </Selection>
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
