import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero({ profile }) {
  if (!profile) return null;

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <span className="hero-role">Software Development Engineer I — Backend (Node.js)</span>

        <h1 className="hero-name">
          Jeevan Kumar
        </h1>

        <p className="hero-bio">
          Results-driven Backend Developer with 1.5+ years of experience engineering scalable server-side applications, RESTful APIs, and cloud services using Node.js, Express.js, AWS Lambda, DynamoDB, MySQL, and React.js.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Github size={16} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        {/* Quick Stats Ticker */}
        <div className="hero-stats">
          <div className="stat-box">
            <div className="stat-num">1.5+ Yrs</div>
            <div className="stat-lbl">Backend SDE Exp.</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">20+</div>
            <div className="stat-lbl">Production APIs</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">9.2 / 10</div>
            <div className="stat-lbl">BE CSE CGPA</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">AWS</div>
            <div className="stat-lbl">Lambda & DynamoDB</div>
          </div>
        </div>
      </div>
    </section>
  );
}
