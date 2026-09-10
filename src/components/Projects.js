import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {
      title: "RoamKe",
      category: "Travel & Adventure Platform",
      description:
        "A Kenya-focused adventure web application designed to help visitors discover destinations, explore recreational sites and plan experiences across the country.",
      technologies: ["React", "JavaScript", "CSS", "React Router"],
      link: "roamke.netlify.app",
      featured: true,
    },

    {
      title: "AI Response Evaluation System",
      category: "AI & API Testing",
      description:
        "A system for evaluating AI-generated responses using a web interface and backend API, with a focus on API testing, response quality and automated evaluation.",
      technologies: ["React", "Django", "REST API", "Postman"],
      link: "#",
      featured: true,
    },

    {
      title: "Liquor Store Management",
      category: "Business Management",
      description:
        "A full-stack inventory and sales management application designed to track products, stock, sales and business performance.",
      technologies: ["React", "Django", "SQL", "REST API"],
      link: "#",
      featured: false,
    },

    {
      title: "Student Clinic System",
      category: "Healthcare Management",
      description:
        "A full-stack application for managing students, medical records and clinic workflows through a web interface and REST API.",
      technologies: ["React", "Django", "JWT", "SQL"],
      link: "#",
      featured: false,
    },

    {
      title: "CloudStore",
      category: "E-Commerce",
      description:
        "An e-commerce application with product management and authentication functionality.",
      technologies: ["React", "Django", "REST API"],
      link: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="projects section">

      <div className="section-container">

        <div className="section-heading">
          <p>SELECTED WORK</p>
          <h2>Projects I've built.</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;