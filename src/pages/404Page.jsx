// Import necessary components and styles
import React, { useEffect } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Spacer } from '../shared/Spacer';
import LogoButton from '../shared/logo-button';
import './../stylesheets/Pages.css';
import { logPageVisit } from "../utils/StorageConfig";
import { Link } from 'react-router-dom';

/**
 * About component for displaying information about the application.
 * @function About
 * @returns {JSX.Element} - About component JSX.
 */
const NotFound = () => {

  useEffect(() => {
    logPageVisit('404')
  }, [])

  return (
    <div className="page-container">
      {/* Display the header of the page */}
      <Header />

      {/* Main content section with information about the application */}
      <div className="information-section">
        <Spacer />
        <LogoButton />
        <Spacer />
        <h1>404 - Not Found</h1>
        <Spacer />
        <Spacer />
        <h2>incorrect URL</h2>
        <Spacer />
        <h3>Sorry, the page you are looking for does not exist.Or a serious error has occured. 
          </h3>
        <h3>If this persists; 
          Please explain in the feedback section 
          <Link to="/contact"> here</Link>
          </h3>
        <Spacer />
        <Spacer />
        {/* Display the logo button */}
        <LogoButton />
        <Spacer />
        <Spacer />
        <Spacer />
      </div>

      {/* Display the footer of the page */}
      <Footer />
    </div>
  );
};

// Export the About component as the default export
export default NotFound;