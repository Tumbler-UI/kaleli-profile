import React from "react";


function Skills() {

  const skills = {
    Frontend: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "React Router"
    ],

    Backend: [
      "Python",
      "Django",
      "Django REST Framework",
      "Flask",
      "REST APIs"
    ],

    Database: [
      "SQL",
      "SQLite",
      "PostgreSQL"
    ],

    Tools: [
      "Git",
      "GitHub",
      "Postman",
      "GitHub Actions",
      "Netlify",
      "Render"
    ],

    "AI & Automation": [
      "AI APIs",
      "Prompt Engineering",
      "AI Evaluation",
      "Workflow Automation",
      "Chatbots"
    ]
  };

  return (
    <section id="skills" className="skills section">

      <div className="section-container">

        <div className="section-heading">
          <p>TECHNOLOGY</p>
          <h2>Tools I work with.</h2>
        </div>

        <div className="skills-grid">

          {Object.entries(skills).map(([category, items]) => (

            <div className="skill-group" key={category}>

              <h3>{category}</h3>

              <div className="skill-list">

                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;