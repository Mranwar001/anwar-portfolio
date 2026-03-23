import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="reveal">
      <h2 className="section-title">Get In Touch</h2>
      <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          I'm currently looking for new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:anwar.dahir.yahaya@gmail.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <Mail size={20} /> Say Hello
        </a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://github.com/Mranwar001" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Github size={24} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Linkedin size={24} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
