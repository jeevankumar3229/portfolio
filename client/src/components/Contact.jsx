import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact({ profile }) {
  if (!profile) return null;

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-label">05. CONTACT</div>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-desc">Interested in backend development opportunities or full-stack projects? Feel free to reach out directly.</p>

        <div className="simple-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Contact Information</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Mail color="var(--primary-accent)" size={20} />
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.85rem' }}>Email Address</strong>
                <a href={`mailto:${profile.email}`} style={{ color: 'var(--primary-accent)', textDecoration: 'none', fontWeight: '500' }}>
                  {profile.email}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Phone color="var(--primary-accent)" size={20} />
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.85rem' }}>Phone Number</strong>
                <a href={`tel:${profile.phone}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                  {profile.phone}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <MapPin color="var(--primary-accent)" size={20} />
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.85rem' }}>Location</strong>
                <span style={{ color: 'var(--text-primary)' }}>{profile.location}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: 1 }}>
                <Github size={16} /> GitHub Profile
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: 1 }}>
                <Linkedin size={16} /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
