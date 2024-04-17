import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import MainContainer from "./components/MainContainer";
import { Suspense, lazy } from "react";
const MainContainer = lazy(() => import("./components/MainContainer"));
function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{ fov: 75, near: 0.5, far: 1000, position: [0, 3, 3] }}
      >
        <Suspense fallback={null}>
          <color attach={"background"} args={["black"]} />
          <OrbitControls />
          <MainContainer />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
