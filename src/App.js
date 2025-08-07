import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Send visit log to your Django backend
    fetch("https://127.0.0.1:8000/api/log/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        app_name: "KalelimburuPortfolio",  // Change as needed
        page_path: window.location.pathname,
      }),
    }).catch((err) => {
      console.error("Failed to log visit:", err);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
