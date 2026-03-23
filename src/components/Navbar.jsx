import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar glass-panel" style={{ position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1200px', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
      <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Anwar.dev</div>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem' }}>
          <li><a href="#about" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--text-main)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>About</a></li>
          <li><a href="#skills" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--text-main)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Skills</a></li>
          <li><a href="#projects" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--text-main)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Projects</a></li>
          <li><a href="#experience" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--text-main)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Experience</a></li>
          <li><a href="#contact" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--text-main)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
