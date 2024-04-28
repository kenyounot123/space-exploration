import { Canvas } from "@react-three/fiber";
import { Stars, useBounds, Bounds, OrbitControls } from "@react-three/drei";
import {
  Selection,
  Outline,
  EffectComposer,
} from "@react-three/postprocessing";
import { Suspense, lazy, useRef } from "react";
import Loading from "./Loading";
import InfoCard from "./InfoCard";
// import { Perf } from "r3f-perf";

import Data from "../helpers/data";
const Planet = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Planet"));
    }, 5000);
  });
});
const MainContainer = ({
  planetClicked,
  setPlanetClicked,
  planet,
  setPlanet,
}) => {
  function handleClick(model) {
    setPlanetClicked(true);
    setPlanet({ ...model });
  }
  const canvasRef = useRef();
  return (
    <>
      {/* <Perf /> */}
      <Suspense fallback={<Loading />}>
        {planetClicked && (
          <InfoCard
            key={planet.id}
            planet={planet}
            onClick={() => setPlanetClicked(false)}
          />
        )}
        <Canvas
          ref={canvasRef}
          shadows
          camera={{ fov: 75, near: 0.5, far: 1000, position: [10, 10, 5] }}
        >
          <color attach={"background"} args={["black"]} />
          <OrbitControls
            enableZoom
            minDistance={1}
            maxDistance={1000}
            makeDefault
          />
          <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
              <Outline
                blur
                visibleEdgeColor="white"
                edgeStrength={10}
                width={1500}
              />
            </EffectComposer>
            <Stars />
            <Bounds fit clip observe margin={1.5}>
              <SelectToZoom>
                {Data.map((planet) => (
                  <Planet
                    key={planet.id}
                    handleClick={handleClick}
                    data={planet}
                  />
                ))}
              </SelectToZoom>
            </Bounds>
          </Selection>
        </Canvas>
      </Suspense>
    </>
  );
};

function SelectToZoom({ children }) {
  const bounds = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && bounds.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => {
        e.button === 0 && bounds.refresh().fit();
      }}
    >
      {children}
    </group>
  );
}
export default MainContainer;
