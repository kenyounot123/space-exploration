import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Timeline from "./components/Timeline";
function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Timeline />
    </>
  );
}

export default App;
