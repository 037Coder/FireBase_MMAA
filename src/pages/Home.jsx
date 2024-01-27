
// Import the 'Header', 'Footer', and Stylesheet
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import './../stylesheets/Pages.css';
import { Link } from 'react-router-dom';
import { Spacer } from '../shared/Spacer';
import LogoButton from '../shared/logo-button';


const Home = () => {
    return (
        <div className="page-container">
            <Header />
            <div className='information-section'>
                <h1>Welcome to MMAAnalytica</h1>
                <LogoButton />
                <h3><Link to="/mmaa">The App</Link></h3>
                <h2>Compare MMA Fighters Like Never Before</h2>
                <p>
                    <strong>MMAAnalytica (MMAA)</strong> empowers MMA fans and data enthusiasts
                    with a unique approach to fighter analysis. Select any two UFC
                    fighters, dive into their last 5 fights, and explore key data
                    points to gain unparalleled insights.
                </p>

                <Spacer />
                <h2>What Sets MMAAnalytica Apart?</h2>
                <p>
                    <strong>Form Over Career Statistics: </strong>
                    We prioritize a fighter's recent performance, focusing on the
                    last 5 fights to provide a real-time snapshot of their
                    abilities.
                </p>
                <p>
                    <strong>Comnpare Fighters: </strong>
                    Compare athlete form statistics with their peers and the legends.
                </p>
                <Spacer />
                <h2>For Pundits, Fans, Athletes, and Coaches</h2>
                <p>
                    Whether you're a passionate fan, a seasoned pundit,
                    an aspiring athlete, or a dedicated coach, <strong>MMAAnalytica</strong> is
                    your go-to platform for informed analysis in combat sports.
                </p>
                <Spacer />
                <h2>Key Features:</h2>
                <p><strong>Fighter Ratio Analysis: </strong>
                    Explore success and defense ratios specific to the last 5
                    fights.</p>
                <p><strong>Dynamic Data Visualization: </strong>
                    Engage with intuitive graphs and visuals for a
                    comprehensive understanding.</p>
                <Spacer />
                <h2>How You Can Support MMAAnalytica:</h2>
                <p>
                    <strong>Explore <Link to="/mmaa">the App</Link>: </strong>
                    Dive into the world of MMA analysis by checking out our app.
                </p>
                <p>    <strong>Support on IndieGogo: </strong>
                    Support our mission on INDIEGOGO. Your contributions help us enhance and expand our offerings.
                </p>
                <Spacer />
                <LogoButton />
                <Spacer />
                <Spacer />
            </div>
            <Footer />
        </div>
    );
}

export default Home;