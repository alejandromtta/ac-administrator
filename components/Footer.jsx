import React from 'react';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <div className="logo" data-testid="footer-logo" />
    <p data-testid="footer-text">
      Sistema de administracion de datos por <a href="https://www.linkedin.com/in/alejandro-mtta/">AM</a>
    </p>
  </footer>
);

export default Footer;
