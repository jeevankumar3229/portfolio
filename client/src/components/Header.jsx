import React from 'react';

export default function Header({ serverStatus }) {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          Jeevan <span>Kumar</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
