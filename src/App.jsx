import "./App.css";

import { Suspense, lazy, useState, useRef } from "react";

const MainContainer = lazy(() => import("./components/MainContainer"));
function App() {
  const [launch, setLaunch] = useState(false);
  // State that tells us whether a planet was clicked or not
  const [planetClicked, setPlanetClicked] = useState(false);
  // State that tells us which planet was clicked
  const [planet, setPlanet] = useState({});

  return (
    <>
      <div>
        <h1>Welcome To Space Exploration</h1>
      </div>
      {launch && (
        <MainContainer
          planetClicked={planetClicked}
          setPlanetClicked={setPlanetClicked}
          planet={planet}
          setPlanet={setPlanet}
        />
      )}
    </>
  );
}

export default App;
