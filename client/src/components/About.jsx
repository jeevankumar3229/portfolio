import React from 'react';

export default function About({ profile }) {
  if (!profile) return null;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-label">01. ABOUT</div>
        <h2 className="section-title">Background & Core Focus</h2>
        
        <p className="section-desc" style={{ maxWidth: '800px' }}>
          Currently serving as SDE I (Full-Time) at <strong>Capillary Technologies</strong>, I specialize in engineering robust RESTful APIs, serverless functions on AWS, database schema design, and microservices architecture. I am proficient in leveraging Node.js, Express, MySQL, MongoDB, AWS Lambda, and modern AI development tools (Claude AI, Cursor IDE, Copilot) to deliver high-quality code.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          <div className="simple-card">
            <h4 style={{ color: 'var(--primary-accent)', marginBottom: '0.5rem', fontWeight: '600' }}>REST API Engineering</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Built and maintained over 20+ production-grade REST API endpoints with structured error handling and validation.
            </p>
          </div>

          <div className="simple-card">
            <h4 style={{ color: 'var(--primary-accent)', marginBottom: '0.5rem', fontWeight: '600' }}>Serverless & Cloud</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Deploys AWS Lambda serverless workflows integrated with Amazon DynamoDB, CloudWatch Logs, and S3.
            </p>
          </div>

          <div className="simple-card">
            <h4 style={{ color: 'var(--primary-accent)', marginBottom: '0.5rem', fontWeight: '600' }}>Relational & NoSQL Databases</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Strong schema design and query optimization experience across MySQL, MongoDB, and DynamoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
