import React from "react";


function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${
        project.featured ? "featured-project" : ""
      }`}
    >

      <div className="project-top">

        <span className="project-category">
          {project.category}
        </span>

        <span className="project-arrow">
          ↗
        </span>

      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tech">

        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}

      </div>

      <div className="project-links">

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View Project →
        </a>

      </div>

    </article>
  );
}

export default ProjectCard;