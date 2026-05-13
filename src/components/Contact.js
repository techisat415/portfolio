import React, { useState } from 'react';
import './Contact.css';

const contactLinks = [
  { icon: '✉', label: 'saksham.panghaal@gmail.com',       href: 'mailto:saksham.panghaal@gmail.com' },
  { icon: '⌁', label: 'techisat415',       href: 'https://github.com/techisat415' },
  { icon: '◈', label: 'linkedin',  href: 'https://www.linkedin.com/in/sakshampanghal/' },
  { icon: '↓', label: 'Download Resume',           href: 'public/saksham_panghal_resume.pdf' },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to your backend / EmailJS / Formspree here
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-wrapper contact">
      <div className="section-header">
        <p className="section-tag">Get in Touch</p>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact__grid">
        <div className="contact__left">
          <p className="contact__blurb">
            Have an interesting project, research collaboration, or just want to connect?
            My inbox is always open.
          </p>
          <div className="contact__links">
            {contactLinks.map(({ icon, label, href }) => (
              <a 
              key={label} 
              href={href} 
              className="contact__link"
              download={
                label === 'Download Resume'
              }
              target={
                href.startsWith('http') 
                ? '_blank' : undefined
              }
              rel={
                href.startsWith('http') 
                ? 'noopener noreferrer' : undefined
              }
              >
                <span className="contact__link-icon">{icon}</span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label className="contact__label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact__input"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__field">
            <label className="contact__label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact__input"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__field">
            <label className="contact__label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact__textarea"
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={`btn-primary contact__submit ${sent ? 'contact__submit--sent' : ''}`}>
            {sent ? 'Message Sent ✓' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
