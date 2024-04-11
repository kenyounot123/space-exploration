import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  // gsap.registerPlugin(useGSAP);

  // const container = useRef();

  // useGSAP(() => {
  //   // gsap code here...
  //   gsap.to(".logo", { x: 360, scale: 2, duration: 2, repeat: -1, yoyo: true }); // <-- automatically reverted
  // }); // <-- scope is for selector text (optional)

  return (
    <>
      {" "}
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
