import React from 'react';

const Skills = () => {
  const skillsList = [
    { name: 'HTML & CSS', level: '95%' },
    { name: 'JavaScript (ES6+)', level: '90%' },
    { name: 'React.js', level: '85%' },
    { name: 'Git & GitHub', level: '88%' },
    { name: 'RESTful APIs', level: '80%' }
  ];

  return (
    <section id="skills" className="reveal">
      <h2 className="section-title">My Technical Arsenal</h2>
      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {skillsList.map((skill, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
              <span>{skill.name}</span>
              <span style={{ color: 'var(--accent-primary)' }}>{skill.level}</span>
            </div>
            <div style={{ height: '8px', background: 'var(--bg-glass)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: skill.level, height: '100%', background: 'var(--accent-primary)', borderRadius: '4px', boxShadow: '0 0 10px var(--accent-glow)' }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
