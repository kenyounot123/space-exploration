import "../stylesheets/Hero.css";
function Hero({ handleLaunch }) {
  return (
    <>
      <div className="hero">
        <div className="hero-img">
          <img src="/assets/backgroundImg.jpeg" alt="Earth" />
        </div>
        <div className="hero-title">
          <h1>Our Solar System</h1>
          <h3>Embark on a Journey Through Space</h3>
          <button onClick={handleLaunch}>Explore Now</button>
        </div>
      </div>
    </>
  );
}
export default Hero;
