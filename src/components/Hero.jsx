import "../stylesheets/hero.css";
import Background from "./Background";
function Hero() {
  return (
    <section className="hero-container container">
      <Background />
      <h1 className="hero-title">Discover The Wonders of Space Exploration</h1>
      <span className="hero-subtext">
        Embark on a Journey to Explore the Vastness of the Universe
      </span>
    </section>
  );
}
export default Hero;
