import React from 'react';
import SectionArtwork from './SectionArtwork';

const Skills = () => {
  return (
    <section id="skills" className="section container-fluid">
      <SectionArtwork variant="skills" />

      <h2 className="section-title hidden">Skills Summary</h2>

      <div className="row g-4 mt-3">

        {[
          {
            title: "Programming",
            skills: ["JavaScript", "Python"]
          },
          {
            title: "Web Development",
            skills: ["HTML", "CSS", "React", "Node.js", "Express"]
          },
          {
            title: "Cloud & DevOps",
            skills: ["AWS", "Google Cloud", "Docker", "CI/CD", "GitHub Actions"]
          },
          {
            title: "Databases",
            skills: ["MySQL", "PostgreSQL"]
          },
          {
            title: "Tools & Platforms",
            skills: ["Git", "GitHub", "Vercel", "Netlify"]
          },
          {
            title: "Soft Skills",
            skills: ["Problem Solving", "System Thinking", "Leadership", "Communication"]
          }
        ].map((item, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4 hidden">
            <div className="skill-card">
              <h3>{item.title}</h3>
              <div className="d-flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
