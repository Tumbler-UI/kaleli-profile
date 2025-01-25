import React from "react";
import profile from '../Images/IMG-20240803-WA0024.jpg';
import "./Hero.css";
import WavingHand from "./WavingHand";

function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="profile-image">
        <img src={profile} alt="Profile" />
        <h1>Hi, I'm Joe<span className="waving-hand-container"><WavingHand /></span></h1>
      </p>
      <h2>Full-Stack Developer | Problem Solver | Lifelong Learner</h2>
      <a href="#projects" className="btn">Explore Projects</a>
    </section>
  );
}

export default Hero;
