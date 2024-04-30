import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";

function InfoCard({ planet, setPlanetClicked }) {
  const [page, setPage] = useState("home");
  useGSAP(() => {
    gsap.fromTo(".card-container", { x: -20 }, { x: 50 });
  }, [planet]);

  function handleInfoClick() {
    setPage("info");
  }
  function handleLinksClick() {
    setPage("links");
  }
  function handleHomeClick() {
    setPage("home");
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-title">
          <h2>{planet.name.toUpperCase()}</h2>
          <h2 className="card-type">{planet.type.toUpperCase()}</h2>
        </div>

        {page === "home" && (
          <div className="card-content">
            <button onClick={handleInfoClick} className="card-btn">
              Encyclopedia
            </button>
            <button onClick={handleLinksClick} className="card-btn">
              Relevant Links
            </button>
            <button onClick={setPlanetClicked} className="card-btn">
              Back To Solar System
            </button>
          </div>
        )}
        {page === "info" && (
          <>
            <button className="card-btn back-btn" onClick={handleHomeClick}>
              Back
            </button>
            <div className="overflow-enable">
              <h2>Introduction</h2>
              <p>{planet.introduction}</p>
              <h2>Size and Distance</h2>
              <p>{planet.sizeDescription}</p>
            </div>
          </>
        )}
        {page === "links" && (
          <>
            <button className="card-btn back-btn" onClick={handleHomeClick}>
              Back
            </button>
            <div className="card-content">
              <button className="card-btn">
                <a
                  target="_blank"
                  href={`https://science.nasa.gov/${planet.name.toLowerCase()}/facts/`}
                >
                  More details
                </a>
              </button>
              <button className="card-btn">
                <a target="_blank" href={planet.links.video}>
                  Video
                </a>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default InfoCard;
// {/* <p className="card-content">{planet.description}</p> */}
