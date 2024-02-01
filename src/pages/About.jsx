// Import necessary components and styles
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import { Spacer, MiniSpacer } from '../shared/Spacer';
import LogoButton from '../shared/logo-button';
import './../stylesheets/Pages.css';
import { logPageVisit } from "../utils/StorageConfig";

/**
 * About component for displaying information about the application.
 * @function About
 * @returns {JSX.Element} - About component JSX.
 */
const About = () => {

  useEffect(() => {
    logPageVisit('About')
  }, [])

  return (
    <div className="page-container">
      {/* Display the header of the page */}
      <Header />

      {/* Main content section with information about the application */}
      <div className="information-section">
        <h1>About Us</h1>
        <p><strong>MMAAnalytica</strong> strives to provide unbiased quantitative data in an easy-to-view manner.</p>
        <Spacer />
        <p>Analyze your favorite fighter's <strong>last 5</strong> fights to predict their performance and compare
          them to the greatest to grace the Octagon.</p>
        <Spacer />
        <p><Link to={"/calculations"}>See how we calculate the data we provide.</Link></p>
        <Spacer />
        <p><strong>Contact us</strong> if you find any discrepancies in the data As Soon As Possible</p>
        <Spacer />
        <p>Read our <Link to={"/disclaimer"}>Disclaimer</Link> to Find out more</p>
        <Spacer />
        {/* Display the logo button */}
        <LogoButton />
        <Spacer />
        <Spacer />
      </div>

      {/* Display the footer of the page */}
      <Footer />
    </div>
  );
};

// Export the About component as the default export
export default About;