import React from "react";


function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-intro">
          Hello, I'm Joe Mburu 👋
        </p>

        <h1>
          Full-Stack Developer
          <span> building with AI & Automation.</span>
        </h1>

        <p className="hero-description">
          I build practical web applications, APIs and intelligent
          digital solutions using React, Python and modern backend
          technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            Explore My Work
          </a>

          <a
            href="https://github.com/Tumbler-UI"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            GitHub
          </a>
        </div>

        <div className="hero-tech">
          <span>React</span>
          <span>Python</span>
          <span>Django</span>
          <span>Flask</span>
          <span>REST APIs</span>
          <span>AI</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;
