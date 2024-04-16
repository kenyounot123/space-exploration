import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Timeline from "./components/Timeline";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Loading show={loading} />
      {!loading && (
        <>
          <Background />
          <Navbar />
          <Hero />
          <Timeline />
        </>
      )}
    </>
  );
}

export default App;
