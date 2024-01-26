// Import necessary libraries and components
import React from 'react';

// Import styles for the Footer component
import './../stylesheets/Footer.css';

import { Link } from 'react-router-dom'; // Import Link component from react-router-dom library

import LogoButton from './../shared/logo-button'; // Import LogoButton component from LogoButton.jsx file

/**
 * Functional component representing the footer of the application.
 * @function Footer
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    // Footer element with a specified class name
    <footer>
      <div className='footer'>
      <Link to="/"><p className='footer-menu'>Home</p></Link>
      <Link to="/disclaimer"><p className='footer-menu'>Disclaimer</p></Link>
      <Link to="/calculations"><p className='footer-menu'>Calculations</p></Link>
      </div>
      <div className='legal-info'>
        <p className='legal-info-text'>Copyright 2024 MMAAnalytica.com LLC.</p>
      </div>
    </footer>
  );
};

// Export the Footer component as the default export
export default Footer;