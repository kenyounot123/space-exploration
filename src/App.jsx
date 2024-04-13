import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import FrontEarth from "./components/FrontEarth";
function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
