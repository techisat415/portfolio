import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Built with ❤️ by <span className="footer__accent">Saksham Panghal</span> — © {new Date().getFullYear()}
      </p>
      <p className="footer__sub">// Portfolio v1.0 — Dark &amp; Techy Edition</p>
    </footer>
  );
}

export default Footer;
