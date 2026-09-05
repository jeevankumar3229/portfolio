import React from 'react';

export default function Experience({ experiences }) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-label">02. EXPERIENCE</div>
        <h2 className="section-title">Work History</h2>
        <p className="section-desc">1.5+ years of hands-on professional software development experience.</p>

        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-top">
                <div>
                  <div className="timeline-title">{exp.role}</div>
                  <div className="timeline-company">{exp.company} — {exp.location}</div>
                </div>
                <span className="timeline-period">{exp.period}</span>
              </div>

              <ul className="timeline-ul">
                {exp.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {exp.tags.map((tag) => (
                  <span className="tag accent" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
