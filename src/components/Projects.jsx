import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectCategories, projectData } from "../data/projects";

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="container-fluid section">
      <h2 className="section-title">Projects Showcase</h2>

      {/* DOMAIN CARDS */}
      <div className="row g-4 mt-3">

        {projectCategories.map((item) => (
          <div key={item.key} className="col-md-4">
            <div className="project-card">
              <div className="project-badge">{item.badge}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button
                type="button"
                className="project-link"
                onClick={() => setActive(item.key)}
              >
                Explore Domain →
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* 🔥 OVERLAY */}
      {active && (
        <div className="project-overlay" onClick={() => setActive(null)}>

          <div
            className="overlay-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="overlay-header">
              <h2>{active.toUpperCase()} PROJECTS</h2>
              <button onClick={() => setActive(null)}>✕</button>
            </div>

            {/* PROJECT CARDS */}
            <div className="row g-4 mt-3">
              {projectData[active].map((proj) => (
                <div key={proj.id} className="col-md-4">

                  <Link
                    to={`/project/${proj.id}`}
                    className="project-detail-card"
                    onClick={() => setActive(null)}
                  >
                    <h4>{proj.name}</h4>
                    <p>{proj.desc}</p>
                  </Link>

                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
