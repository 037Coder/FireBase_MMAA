// Import necessary components and styles
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import './../stylesheets/Pages.css';
import { Spacer, MiniSpacer } from './../shared/Spacer';
import LogoButton from '../shared/logo-button';
import { Link } from 'react-router-dom'
import { logPageVisit } from "../utils/StorageConfig";

/**
 * About component for displaying information about the application.
 * @function About
 * @returns {JSX.Element} - About component JSX.
 */
const Calculations = () => {

    useEffect(() => {
        logPageVisit('Calculations')
    }, [])
    return (
        <div className="page-container">
            <Header />
            <div className="information-section" id="calc-page">
                <h1>Calculations</h1>
                <h2>Data Source</h2>
                <p><Link to={'http://ufcstats.com/statistics/events/completed'}>UFCstats.com</Link>: Information about fighters and their last 5 fights is scraped
                    from the official UFC website.
                </p>
                <Spacer />
                <h2>Data Points:</h2>
                <h3>Labels</h3>
                <MiniSpacer />
                <table>
                    <tbody>
                        <tr>
                            <td className='td-left'>kd</td>
                            <td className='td-right'>Knockdowns</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Td</td>
                            <td className='td-right'>Takedowns</td>
                        </tr>
                        <tr>
                            <td className='td-left'>SS / SigStr</td>
                            <td className='td-right'>Significant Strikes</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Ctrl</td>
                            <td className='td-right'>Control</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Head</td>
                            <td className='td-right'>Strikes to the Head</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Body</td>
                            <td className='td-right'>Strikes to the Body</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Legs</td>
                            <td className='td-right'>Strikes to the Legs</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Dist</td>
                            <td className='td-right'>Strikes from Distance</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Clnch</td>
                            <td className='td-right'>Strikes in Clinch</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Grnd</td>
                            <td className='td-right'>Strikes on Ground</td>
                        </tr>
                    </tbody>
                </table>
                <Spacer />
                <h3>Calcultions:</h3>
                <MiniSpacer />
                <table>
                    <tbody>
                        <tr>
                            <td className='td-left'>Suc</td>
                            <td className='td-right'>Success</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Def</td>
                            <td className='td-right'>Defense</td>
                        </tr>
                        <tr>
                            <td className='td-left'>Rat</td>
                            <td className='td-right'>Ratio</td>
                        </tr>
                    </tbody>
                </table>
                <Spacer />
                <h2>Calculation Methods:</h2>
                <h3>Strike Success:</h3>

                <p><strong>Data Points:</strong> Significant Strikes, Total Strikes, Takedowns, Head, Body, Legs, Distance, Clinch, Ground
                </p>
                <p><strong>Calculation:</strong> Strikes Landed / Strikes Attempted</p>
                <MiniSpacer />
                <h3>Ratio Metrics:</h3>

                <p><strong>Data Points:</strong> Knockdowns, Significant Strikes, Total Strikes, Takedowns, Head, Body, Legs, Distance,
                    Clinch, Ground
                </p>
                <p><strong>Calculation:</strong> Strikes Landed / (Strikes Landed + Strikes Absorbed)</p>
                <p><strong>Data Points:</strong> Control</p>
                <p><strong>Calculation:</strong> Time in Control / (Time in Control + Time under Control)</p>
                <MiniSpacer />
                <h3>Defensive Metrics:</h3>

                <p><strong>Data Points:</strong> Significant Strikes, Total Strikes, Takedowns, Head, Body, Legs, Distance, Clinch,
                    Ground
                </p>
                <p><strong>Calculation:</strong> 1 - (Strikes Absorbed / Strikes Received)</p>
                <p> <em>it's important to note that this metric may not capture all aspects of defense. Use this ratio as a measure of how efficiently a fighter
                    avoids incoming attacks."</em>
                </p>

                <Spacer />
                <h2>Frequency of Updates</h2>
                <p>
                    The data on the website is updated weekly to ensure the most recent and relevant
                    information.

                </p>
                <Spacer />
                <h2>Limitations and Considerations</h2>
                <p>
                    While we strive for accuracy, please note that the statistics presented on this website are
                    subject to potential human error. We acknowledge the possibility of inaccuracies and
                    appreciate your understanding.
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

export default Calculations;