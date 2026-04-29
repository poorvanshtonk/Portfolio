import React from "react";
import { Link, useParams } from "react-router-dom";
import { projectData, projectIndex } from "../data/projects";
import SectionArtwork from "../components/SectionArtwork";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectIndex[id];

  if (!project) {
    return (
      <section className="container project-detail-page section">
        <SectionArtwork variant="detail" />
        <div className="project-detail-shell">
          <p className="project-detail-eyebrow">Project</p>
          <h1>Project not found</h1>
          <p className="project-detail-summary">
            The project you selected does not exist yet or the link is incomplete.
          </p>
          <Link to="/#projects" className="btn-ghost-custom">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const techList = Array.isArray(project.tech) ? project.tech : [project.tech].filter(Boolean);
  const liveHref = project.live && project.live !== "#" ? project.live : null;
  const relatedProjects = Object.values(projectData)
    .flat()
    .filter((item) => item.id !== project.id)
    .slice(0, 3);

  return (
    <section className="container project-detail-page section">
      <SectionArtwork variant="detail" />
      <div className="project-detail-shell">
        <Link to="/#projects" className="project-back-link">
          ← Back to Projects
        </Link>

        <div className="project-detail-hero">
          <div>
            <p className="project-detail-eyebrow">Project Detail</p>
            <h1>{project.name}</h1>
            <p className="project-detail-summary">{project.desc}</p>
          </div>

          <div className="project-detail-status">
            <span>Current stage</span>
            <strong>{project.stage}</strong>
          </div>
        </div>

        <div className="project-detail-grid">
          <article className="project-detail-card-block">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </article>

          <article className="project-detail-card-block">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </article>

          <article className="project-detail-card-block">
            <h2>Stack</h2>
            <div className="project-tech-list">
              {techList.map((tech) => (
                <span key={tech} className="project-tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="project-detail-actions">
          {liveHref ? (
            <a
              href={liveHref}
              className="btn-primary-custom"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : (
            <span className="btn-primary-custom project-button-disabled">
              Live Demo Soon
            </span>
          )}

          <a
            href={project.github}
            className="btn-ghost-custom"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="more-projects-panel">
          <div className="more-projects-header">
            <div>
              <p className="project-detail-eyebrow">Keep Browsing</p>
              <h2>More projects</h2>
            </div>
            <Link to="/#projects" className="project-back-link">
              Open showcase →
            </Link>
          </div>

          <div className="more-projects-grid">
            {relatedProjects.map((item) => (
              <Link key={item.id} to={`/project/${item.id}`} className="more-project-card">
                <span>{item.stage}</span>
                <strong>{item.name}</strong>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
