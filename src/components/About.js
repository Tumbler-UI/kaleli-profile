import React from "react";


function About() {
  return (
    <section id="about" className="about section">

      <div className="section-container">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Building software with purpose.</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I'm a Full-Stack Developer interested in building practical
              software that solves real-world problems.
            </p>

            <p>
              My development journey has taken me through React, Python,
              Django, Flask, REST APIs and SQL, while giving me experience
              building applications ranging from business management
              systems to travel platforms.
            </p>

            <p>
              I'm particularly interested in the intersection between
              full-stack development, artificial intelligence and
              automation.
            </p>
          </div>

          <div className="about-card">
            <div>
              <strong>01</strong>
              <span>Build</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Integrate</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Automate</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Improve</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
