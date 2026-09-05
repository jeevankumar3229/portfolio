import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

export default function Education({ education, certifications }) {
  if (!education) return null;

  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-subtitle">
          <GraduationCap size={16} /> ACADEMICS & CREDENTIALS
        </div>
        <h2 className="section-title">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-desc">
          Strong academic foundations in Computer Science & Engineering paired with continuous professional growth.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Education Block */}
          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <GraduationCap color="#00f2fe" size={22} /> Academic Degrees
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((edu, idx) => (
                <div className="glass-card" key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: '700' }}>{edu.degree}</h4>
                    <span className="timeline-period">{edu.period}</span>
                  </div>

                  <div style={{ color: 'var(--accent-blue)', fontWeight: '600', fontSize: '0.92rem', marginBottom: '0.5rem' }}>
                    {edu.institution} | {edu.location}
                  </div>

                  <div className="tech-badge cyan" style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                    {edu.score}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Award color="#4facfe" size={22} /> Courses & Certifications
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {certifications && certifications.map((cert, idx) => (
                <div className="glass-card" key={idx}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <CheckCircle color="#10b981" size={18} />
                    <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: '700' }}>{cert.title}</h4>
                  </div>

                  <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                    Issuer: {cert.issuer}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
