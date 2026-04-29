import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectCategories, projectData } from "../data/projects";
import SectionArtwork from "./SectionArtwork";

const Projects = () => {
  const [active, setActive] = useState(null);
  const activeCategory = projectCategories.find((item) => item.key === active);

  useEffect(() => {
    if (!active) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <>
      <section id="projects" className="container-fluid section projects">
        <SectionArtwork variant="projects" className="section-artwork-left" />

        {/* ✅ CLEAN HEADER */}
        <div className="projects-heading hidden">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A collection of my work across development, startups, AI, and open source.
          </p>
        </div>

        {/* ✅ FIXED GRID (3 PER ROW) */}
        <div className="row g-4 mt-3 project-category-grid">

          {projectCategories.map((item) => (
            <div key={item.key} className="col-12 col-md-6 col-lg-4 hidden">

              <div className="project-card h-100">

                {/* TOP */}
                <div className="project-card-top d-flex justify-content-between align-items-center">
                  <div className="project-badge">{item.badge}</div>
                  <span className="project-count" style={{color: "grey"}}>
                    {projectData[item.key].length}{" "}
                    {projectData[item.key].length === 1 ? "Project" : "Projects"}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="mt-2">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                {/* BUTTON */}
                <button
                  type="button"
                  className="project-link mt-auto"
                  onClick={() => setActive(item.key)}
                >
                  Explore Domain →
                </button>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= OVERLAY ================= */}
      {active && (
        <div className="project-overlay" onClick={() => setActive(null)}>

          <div
            className="overlay-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="overlay-header">
              <div>
                <h2>{activeCategory?.title} Projects</h2>
                <p>{activeCategory?.description}</p>
              </div>

              <button type="button" onClick={() => setActive(null)}>
                ×
              </button>
            </div>

            {/* PROJECT LIST */}
            <div className="row g-4 mt-4">

              {projectData[active].map((proj) => (
                <div key={proj.id} className="col-12 col-md-6 col-lg-4">

                  <Link
                    to={`/project/${proj.id}`}
                    className="project-detail-card h-100"
                    onClick={() => setActive(null)}
                  >
                    <span className="project-stage">{proj.stage}</span>

                    <h4>{proj.name}</h4>
                    <p>{proj.desc}</p>

                    <div className="project-card-footer">
                      <span>View case study</span>
                      <span>→</span>
                    </div>
                  </Link>

                </div>
              ))}

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
