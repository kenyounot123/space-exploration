import "../stylesheets/hero.css";
import FrontEarth from "./FrontEarth";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);
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
