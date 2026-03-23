import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sirat al-Hayah',
      desc: 'A dedicated platform offering spiritual guidance and resources.',
      tech: ['React', 'CSS', 'Vercel'],
      github: 'https://github.com/Mranwar001/sirat-al-hayah',
      demo: 'https://sirat-al-hayah.vercel.app'
    },
    {
      title: 'Ramadan Legacy',
      desc: 'An application tailored for tracking and enriching the Ramadan experience.',
      tech: ['React', 'Vercel'],
      github: 'https://github.com/Mranwar001/ramadan-legacy',
      demo: 'https://ramadan-legacy.vercel.app'
    },
    {
      title: 'Adorable Voostech',
      desc: 'Corporate landing page built through the Voostech training program.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Mranwar001/adorable-voostech',
      demo: 'https://adorable-voostech.vercel.app'
    },
    {
      title: 'NOUN Success OS',
      desc: 'An academic companion ensuring success for NOUN students.',
      tech: ['React', 'CSS'],
      github: 'https://github.com/Mranwar001/noun-success-os',
      demo: 'https://noun-success-os.vercel.app'
    },
    {
      title: 'Romantic Experience',
      desc: 'A customized interactive romantic birthday webpage.',
      tech: ['React', 'CSS Animations'],
      github: 'https://github.com/Mranwar001/romantic-birthday-experience',
      demo: 'https://romantic-birthday-experience.vercel.app'
    },
    {
      title: 'Anwar Birthday Site',
      desc: 'Personal portfolio celebration featuring unique entry animations.',
      tech: ['React', 'Framer Motion'],
      github: 'https://github.com/Mranwar001/anwar-birthday-site',
      demo: 'https://-site.vercel.app'
    }
  ];

  return (
    <section id="projects" className="reveal">
      <h2 className="section-title">Selected Works</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>{project.desc}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {project.tech.map(t => (
                <span key={t} style={{ fontSize: '0.8rem', padding: '4px 12px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '100px' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={project.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                <Github size={18} /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
