
// Import the 'Header', 'Footer', and Stylesheet
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import './../stylesheets/Pages.css';
import { Link } from 'react-router-dom';
import { Spacer, MiniSpacer } from '../shared/Spacer';
import LogoButton from '../shared/logo-button';



const About = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="information-section">
        <h1>About Us</h1>
        <p><strong>MMAAnalytica</strong> strives to provide unbiased quantitative data in an easy to view manner.</p>
        <Spacer />
        <p>Analyse your favourite fighter's <strong>last 5</strong> fights to predict their performance and compare
          them to the greatest to grace the Octagon.</p>
        <Spacer />
        <p><Link to={"/calculations"}>See how we calculate the data we provide.</Link></p>
        <Spacer />
        <p><strong>Contact us</strong> if you find any discrepencies in the data As Soon As Possible</p>
        <Spacer />
        <p>Read our <Link to={"/disclaimer"}>Disclaimer</Link> to Find out more</p>
        <Spacer />
        <Spacer />
        <Spacer />
      </div>
      <Footer />
    </div>
  );
}

export default About;