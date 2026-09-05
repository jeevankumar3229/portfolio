import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-label">04. PROJECTS</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc">Selected software applications and full-stack projects.</p>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div className="simple-card project-card" key={proj.id}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="tag accent">{proj.category}</span>
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                    <Github size={18} />
                  </a>
                </div>

                <div className="project-title">{proj.title}</div>
                <p className="project-desc">{proj.summary}</p>

                <ul style={{ listStyle: 'square', paddingLeft: '1.2rem', marginBottom: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  {proj.highlights.slice(0, 3).map((point, idx) => (
                    <li key={idx} style={{ marginBottom: '0.3rem' }}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="skill-pills">
                {proj.techStack.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
