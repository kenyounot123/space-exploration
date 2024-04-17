import "../stylesheets/timeline.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, Suspense } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { lazy } from "react";
import Loading from "./Loading";

const Moon = lazy(() => import("/public/Moon/Moon.jsx"));

function MoonModel() {
  return (
    <div className="moon-canvas-container ">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          <Moon />
        </Suspense>
      </Canvas>
    </div>
  );
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Timeline() {
  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap.set(".timeline-title", { opacity: 0 });
      gsap.set(".moon-canvas-container", { opacity: 0 });
      gsap.to(".timeline-title", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".timeline-title",
          start: "top center",
          end: "600px",
          toggleActions: "restart pause reverse reverse",
        },
        x: 100,
        duration: 1,
      });
      gsap.to(".moon-canvas-container", {
        opacity: 1,
        x: 50,
        scrollTrigger: {
          trigger: ".moon-canvas-container",
          start: "top center",
          end: "600px",
          toggleActions: "restart pause reverse reverse",
        },
        duration: 1,
      });
      gsap.from(".content", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".content",
          start: "top center",
          end: "600px",
          toggleActions: "restart pause reverse reverse",
        },
        x: 100,
        duration: 1,
      });
    },

    { scope: container }
  );
  return (
    <main ref={container} className="timeline-container">
      <h1 className="timeline-title">
        {" "}
        July 20, 1969 <br></br>First Human Moon Landing
      </h1>
      <div className="info">
        <MoonModel />
        <section className="content">
          <p className="timeline-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            quisquam illum, ullam aut aperiam modi sequi nihil eum dolore fugiat
            voluptatibus debitis molestiae impedit beatae fugit hic. Quam,
            adipisci ut. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Itaque voluptatum blanditiis ullam reiciendis saepe, eveniet
            cum
          </p>
        </section>
      </div>
    </main>
  );
}

export default Timeline;
