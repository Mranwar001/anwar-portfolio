import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="reveal">
      <h2 className="section-title">Journey & Learning</h2>
      <div style={{ borderLeft: '2px solid var(--border-glass)', paddingLeft: '2rem', marginLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-2.45rem', top: '0', width: '16px', height: '16px', background: 'var(--accent-primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-glow)' }}></div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Frontend Development Trainee</h3>
          <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '1rem' }}>Voostech</p>
          <p style={{ color: 'var(--text-muted)' }}>Underwent intensive training focusing on modern web development practices, mastering HTML, CSS, JavaScript, and React to build responsive and interactive applications.</p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-2.45rem', top: '0', width: '16px', height: '16px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>3MTT Fellow</h3>
          <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '1rem' }}>3MTT Nigeria</p>
          <p style={{ color: 'var(--text-muted)' }}>Participated in the prestigious 3MTT program, expanding technical knowledge and collaborating on projects aimed at driving digital transformation.</p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
