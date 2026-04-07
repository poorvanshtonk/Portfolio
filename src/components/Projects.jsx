import React from 'react';

const Projects = () => {
  const data = [
    {
      badge: "Security",
      title: "Security Engineering",
      desc: "Vulnerability analysis, tools, and protection systems.",
      link: "/projects/security"
    },
    {
      badge: "Startup",
      title: "Startups",
      desc: "Real-world product building and experiments.",
      link: "/projects/startup"
    },
    {
      badge: "AI",
      title: "AI / ML",
      desc: "Machine learning and intelligent systems.",
      link: "/projects/ai"
    },
    {
      badge: "OSS",
      title: "Open Source",
      desc: "Community-driven contributions.",
      link: "/projects/open-source"
    }
  ];

  return (
    <section id="projects" className="section projects container-fluid">

      <h2 className="section-title hidden">Projects Showcase</h2>

      <div className="row g-4 mt-3">
        {data.map((item, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4 hidden">
            <div className="project-card">
              <div className="project-badge">{item.badge}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={item.link} className="project-link">Explore Domain →</a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;