import "../stylesheets/hero.css";
import gsap from "gsap";
import { lazy, Suspense, startTransition } from "react";
import { ScrollToPlugin } from "gsap/all";
import { Canvas } from "@react-three/fiber";
import Loading from "./Loading";

gsap.registerPlugin(ScrollToPlugin);
const Earth = lazy(() => import("/public/Earth/Earth.jsx"));
function FrontEarth() {
  return (
    <div className="earth-canvas-container">
      <Canvas>
        <directionalLight position={[15, 5, 0]} />
        <Earth />
      </Canvas>
    </div>
  );
}

function Hero() {
  const handleClick = () => {
    const nextViewportHeight = window.innerHeight + window.scrollY;
    gsap.to(window, {
      scrollTo: { y: nextViewportHeight, autoKill: false },
      duration: 0.01,
      ease: "power4.out",
    });
  };
  return (
    <section className="hero-container container">
      <div className="text">
        <h1 className="hero-title">
          Discover The Wonders of Space Exploration
          <button onClick={handleClick} className="hero-button">
            Continue
          </button>
        </h1>
      </div>
      <FrontEarth />
    </section>
  );
}
export default Hero;
