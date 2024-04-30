import "./App.css";
import { lazy, useState, startTransition } from "react";
import Hero from "./components/Hero";
const MainContainer = lazy(() => import("./components/MainContainer"));

function App() {
  const [launch, setLaunch] = useState(false);
  // State that tells us whether a planet was clicked or not
  const [planetClicked, setPlanetClicked] = useState(false);
  // State that tells us which planet was clicked
  const [planet, setPlanet] = useState({});

  // Handle initial launch of our app
  const handleLaunch = () => {
    startTransition(() => {
      setLaunch(true);
    });
  };

  return (
    <>
      {launch ? (
        <MainContainer
          planetClicked={planetClicked}
          setPlanetClicked={setPlanetClicked}
          planet={planet}
          setPlanet={setPlanet}
        />
      ) : (
        <Hero handleLaunch={handleLaunch} />
      )}
    </>
  );
}

export default App;
