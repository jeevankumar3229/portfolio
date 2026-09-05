import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [profile, setProfile] = useState(portfolioData.profile);
  const [skills, setSkills] = useState(portfolioData.skills);
  const [experiences, setExperiences] = useState(portfolioData.experience);
  const [projects, setProjects] = useState(portfolioData.projects);
  const [education, setEducation] = useState(portfolioData.education);
  const [certifications, setCertifications] = useState(portfolioData.certifications);
  const [serverOnline, setServerOnline] = useState(false);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const [profRes, skillRes, expRes, projRes, eduRes] = await Promise.allSettled([
          fetch('/api/profile'),
          fetch('/api/skills'),
          fetch('/api/experience'),
          fetch('/api/projects'),
          fetch('/api/education')
        ]);

        if (profRes.status === 'fulfilled' && profRes.value.ok) {
          const profData = await profRes.value.json();
          if (profData.data) setProfile(profData.data);
          setServerOnline(true);
        }

        if (skillRes.status === 'fulfilled' && skillRes.value.ok) {
          const skillData = await skillRes.value.json();
          if (skillData.data) setSkills(skillData.data);
        }

        if (expRes.status === 'fulfilled' && expRes.value.ok) {
          const expData = await expRes.value.json();
          if (expData.data) setExperiences(expData.data);
        }

        if (projRes.status === 'fulfilled' && projRes.value.ok) {
          const projData = await projRes.value.json();
          if (projData.data) setProjects(projData.data);
        }

        if (eduRes.status === 'fulfilled' && eduRes.value.ok) {
          const eduData = await eduRes.value.json();
          if (eduData.data?.education) setEducation(eduData.data.education);
          if (eduData.data?.certifications) setCertifications(eduData.data.certifications);
        }
      } catch (err) {
        console.warn('Backend API server not reachable, using static portfolio data:', err);
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
        <Education education={education} certifications={certifications} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
