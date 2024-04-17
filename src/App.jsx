import "./App.css";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
const Timeline = lazy(() => import("./components/Timeline"));
const Hero = lazy(() => import("./components/Hero"));
// import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Background />
        <Hero />
        <Timeline />
      </Suspense>
    </>
  );
}

export default App;
