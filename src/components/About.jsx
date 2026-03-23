import React from 'react';

const About = () => {
  return (
    <section id="about" className="reveal">
      <h2 className="section-title">About Me</h2>
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Hello! I'm <strong>Anwar Dahir Yahaya</strong>, a passionate developer dedicated to creating intuitive and dynamic user experiences. My journey into tech has been fueled by a deep curiosity for how things work and a desire to build solutions that positively impact people's lives.
        </p>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          I refined my skills through intensive training at <strong>Voostech</strong> and the <strong>3MTT</strong> program, where I embraced modern frontend technologies and best practices. Whether it's designing a responsive landing page or architecting a complex web application, I bring a problem-solving mindset and an eye for high-end aesthetics to every project.
        </p>
      </div>
    </section>
  );
};

export default About;
