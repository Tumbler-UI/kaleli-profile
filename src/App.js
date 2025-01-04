import React from "react";
import "./App.css";
import Hero from "./components/herosection";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div className="App">
     
      
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="herotop">
        <Hero />
      </div>
    </div>
  );
};

export default App;
