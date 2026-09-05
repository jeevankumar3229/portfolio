import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [serverOnline, setServerOnline] = useState(false);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const [profRes, skillRes, expRes, projRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/skills'),
          fetch('/api/experience'),
          fetch('/api/projects')
        ]);

        if (profRes.ok) {
          const profData = await profRes.json();
          setProfile(profData.data);
          setServerOnline(true);
        }

        if (skillRes.ok) {
          const skillData = await skillRes.json();
          setSkills(skillData.data);
        }

        if (expRes.ok) {
          const expData = await expRes.json();
          setExperiences(expData.data);
        }

        if (projRes.ok) {
          const projData = await projRes.json();
          setProjects(projData.data);
        }
      } catch (err) {
        console.error('API connection failed:', err);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <div className="app">
      <Header serverStatus={serverOnline} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
