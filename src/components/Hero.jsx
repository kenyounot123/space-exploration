import "../stylesheets/hero.css";
import FrontEarth from "./FrontEarth";
function Hero() {
  return (
    <section className="hero-container container">
      <div className="text">
        <h1 className="hero-title">
          Discover The Wonders of Space Exploration
          <button className="hero-button">Continue</button>
        </h1>
      </div>
      <FrontEarth />
    </section>
  );
}
export default Hero;
