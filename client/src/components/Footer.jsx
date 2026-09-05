import React from 'react';

export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Jeevan Kumar. Built with React & Node.js.</p>
      </div>
    </footer>
  );
}
