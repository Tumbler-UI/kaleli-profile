import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    { title: "Portfolio Website", link: "kalelimburu.netlify.app" },
    { title: "Cloudstore", link: "https://cloud-store-54gn.vercel.app" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
