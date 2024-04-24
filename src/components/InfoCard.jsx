import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";

function InfoCard({ planet, onClick }) {
  const [page, setPage] = useState("home");
  useGSAP(() => {
    gsap.fromTo(".card-container", { x: -10 }, { x: 50 });
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
            <button onClick={onClick} className="card-btn">
              Back To Solar System
            </button>
          </div>
        )}
        {page === "info" && <div className="card-content"></div>}
        {page === "links" && <div className="card-content"></div>}
      </div>
    </div>
  );
}
export default InfoCard;
// {/* <p className="card-content">{planet.description}</p> */}
