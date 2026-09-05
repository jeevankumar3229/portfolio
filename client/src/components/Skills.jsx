import React from 'react';

export default function Skills({ skills }) {
  if (!skills) return null;

  const categories = [
    { title: 'Backend & APIs', items: skills.backend },
    { title: 'Cloud & AWS Services', items: skills.cloudAndAWS },
    { title: 'Databases', items: skills.databases },
    { title: 'Frontend Frameworks', items: skills.frontend },
    { title: 'Languages', items: skills.languages },
    { title: 'Tools & AI Assistants', items: skills.toolsAndDevOps },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-label">03. SKILLS</div>
        <h2 className="section-title">Technical Proficiency</h2>
        <p className="section-desc">Technologies and frameworks I work with regularly.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {categories.map((cat, idx) => (
            <div className="simple-card" key={idx}>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-pills">
                {cat.items && cat.items.map((skill) => (
                  <span className="tag accent" key={skill.name}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
