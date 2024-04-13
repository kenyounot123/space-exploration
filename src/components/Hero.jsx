import "../stylesheets/hero.css";
import FrontEarth from "./FrontEarth";
function Hero() {
  return (
    <section className="hero-container container">
      <div className="text">
        <h1 className="hero-title">
          Discover The Wonders of Space Exploration
          <span className="hero-subtext">
            Embark on a Journey to Explore the Vastness of the Universe
          </span>
        </h1>
      </div>
      <FrontEarth />
    </section>
  );
}
export default Hero;
