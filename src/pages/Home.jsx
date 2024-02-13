// Import necessary components and styles
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import './../stylesheets/Pages.css';
import { Spacer } from '../shared/Spacer';
import LogoButton from '../shared/logo-button';
import { logPageVisit } from '../utils/StorageConfig';
import banner from "./../MMAA_Logo_Banner.png"

/**
 * Home component for displaying the home page content.
 * @function Home
 * @returns {JSX.Element} - Home component JSX.
 */
const Home = () => {

    useEffect(() => {
        logPageVisit('HomePage')
    }, [])


    return (
        <div className="page-container">
            {/* Display the header of the page */}
            <Header />

            {/* Main content section with information about the application */}
            <div className='information-section'>
                <h1>Home</h1>
                {/* Display the logo button */}
                <LogoButton />
                <h3><Link to="/mmaa">The App</Link></h3>

                <img className="hero" alt="<h1>hi</h1>" src={banner}></img>
                <Spacer />


                <h2>Empower Your Analysis with the Ultimate UFC Stats and
                    Fighter Data Tool</h2>
                <p>
                    <strong>Discover the Power of MMAAnalytica: (MMAA)</strong>
                    Dive into the last 5 fights of UFC fighters,
                    analyze key data points, and gain unparalleled insights
                    – all with the ultimate tool in combat sports analysis.
                </p>

                <Spacer />
                <h2>What Sets MMAAnalytica Apart?</h2>
                <p>
                    <strong>Harnessing the Power of Data: </strong>
                    Prioritizing recent performance over career statistics,
                    we provide a real-time snapshot of fighter abilities,
                    ensuring you're always ahead in your analysis.
                </p>
                <p>
                    <strong>Compare Fighters Like Never Before: </strong>
                    Utilize our powerful tool for in-depth comparisons of
                    athlete form statistics alongside their peers and legends.
                </p>

                <Spacer />
                <h2>Key Features:</h2>
                <p>
                    <strong>Fighter Ratio Analysis: </strong>
                    Delve into success and defense ratios specific
                    to the last 5 fights, all fights, or last 3 years;
                    maximizing your insight.
                </p>
                <p>
                    <strong>Dynamic Data Visualization: </strong>
                    EEngage with intuitive graphs and visuals for a
                    comprehensive understanding of fighter performance.
                </p>
                <Spacer />
                <h2>How You Can Leverage MMAAnalytica:</h2>
                <p>
                    <strong>Harness the Power of Our Tool:</strong>
                    <strong> Explore <Link to="/mmaa">the App</Link></strong>;
                    or <a href='https://twitter.com/mmaanalytica' >follow us on X.</a>
                </p>
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
}

// Export the Home component as the default export
export default Home;
