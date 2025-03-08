import React from "react";
import profile from '../Images/IMG-20240803-WA0024.jpg';
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="profile-image">
          <img src={profile} alt="Profile" />
        </div>
        <div className="text-content">
          <h2>Full-Stack Developer | Problem Solver | Lifelong Learner</h2>
          <a href="#projects" className="btn">Explore Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

