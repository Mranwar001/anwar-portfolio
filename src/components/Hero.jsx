import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '120px' }}>
      <div className="hero-content">
        <img
          src="https://i.ibb.co/PZQt81kC/PSX20260321-092916.jpg"
          alt="Anwar Dahir Yahaya"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            margin: '0 auto 2rem',
            boxShadow: '0 0 40px var(--accent-glow)',
            border: '4px solid rgba(59, 130, 246, 0.4)',
            display: 'block'
          }}
        />
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Building Powerful Digital Experiences
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Frontend Developer | Problem Solver | AI Enthusiast
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
