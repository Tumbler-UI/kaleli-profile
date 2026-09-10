import React from "react";


function Contact() {
  return (
    <section id="contact" className="contact section">

      <div className="contact-container">

        <p className="contact-label">
          LET'S BUILD SOMETHING
        </p>

        <h2>
          Have an idea?
          <span>Let's talk.</span>
        </h2>

        <p>
          I'm interested in software development opportunities,
          freelance projects, AI applications and automation ideas.
        </p>

        <div className="contact-buttons">

          <a
            href="joekaleli9@gmail.com"
            className="contact-btn"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Tumbler-UI"
            target="_blank"
            rel="noreferrer"
            className="contact-btn outline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn outline"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;