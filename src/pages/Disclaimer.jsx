// Import necessary components and styles
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import './../stylesheets/Pages.css';
import { Spacer, MiniSpacer } from '../shared/Spacer';
import LogoButton from '../shared/logo-button';

/**
 * Disclaimer component for displaying a disclaimer page with important notices.
 * @function Disclaimer
 * @returns {JSX.Element} - Disclaimer component JSX.
 */
const Disclaimer = () => {
    return (
        <div className="page-container">
            {/* Display the header of the page */}
            <Header />

            {/* Main content section with the disclaimer information */}
            <div className="information-section">
                <h1>Disclaimer:</h1>
                <h2>Important Notice:</h2>
                <p>
                    <strong>Data Accuracy: </strong>
                    The statistics presented on this website are based on publicly available
                    information and may not be entirely accurate or up-to-date. We make
                    reasonable efforts to ensure the accuracy of the data, but we cannot
                    guarantee its completeness or correctness.
                </p>
                <MiniSpacer />
                <p>
                    <strong>No Endorsement or Affiliation: </strong>
                    We are an independent platform and have no official endorsement or
                    affiliation with the Ultimate Fighting Championship (UFC) or any other
                    fight promotion. The use of fighter names, images, and other related
                    information is solely for informational purposes.
                </p>
                <MiniSpacer />
                <p>
                    <strong>Gambling Considerations: </strong>
                    Comparing fighter statistics should not be considered a basis for making
                    betting or gambling decisions. Gambling involves risk, and past performance
                    does not guarantee future results. Users are encouraged to exercise caution
                    and seek professional advice if engaging in any form of gambling.
                </p>
                <MiniSpacer />
                <p>
                    <strong>Liability Limitations: </strong>
                    The information provided on this website is for general informational
                    purposes only. We disclaim any liability for errors or omissions in the
                    content and any loss or damage incurred as a result of using or relying on
                    the information presented.
                </p>
                <MiniSpacer />
                <p>
                    <strong>No Financial Advice: </strong>
                    This website does not provide financial advice. Users should not interpret
                    any information on this website as financial, investment, or betting advice.
                    Consult with a qualified professional for personalized advice.
                </p>
                <MiniSpacer />
                <p>
                    <strong>User Responsibility: </strong>
                    Users of this website acknowledge that they are responsible for their own
                    decisions and actions. We do not accept responsibility for any consequences
                    arising from the use of the information provided.
                </p>
                <MiniSpacer />
                <p>
                    <strong>Legal Compliance: </strong>
                    Users are responsible for ensuring that their use of this website complies
                    with all applicable laws and regulations in their jurisdiction.
                </p>
                <MiniSpacer />
                <p>
                    <strong>
                        By accessing and using this website, you agree to these terms and conditions.
                        If you do not agree with any part of this disclaimer, please refrain from using the website.
                    </strong>
                </p>
                <Spacer />
                {/* Display the logo button */}
                <LogoButton />
                <Spacer id="cookie-policy" />

                <h1>Cookie Policy</h1>

                <p>This website uses cookies to enhance your experience. Cookies are small files stored on your computer that help us
                    analyze site usage and improve performance.</p>

                <h2>How We Use Cookies</h2>
                <ul id="disclaimerlist">
                    <li>
                        <p><strong>Analytics Cookies:</strong> These cookies help us analyze how users interact with our website. The information
                            collected is anonymous and is used to improve the performance of our website.</p>
                    </li>
                    <li>
                        <p><strong>Preference Cookies:</strong> These cookies are used to store user preferences, such as cookie consent and
                            preferences chosen by the user on the website.</p>
                    </li>
                    <li>
                        <p><strong>Session Storage:</strong> We use session storage to store temporary data, such as objects retrieved from external
                            Storage, to enhance the user experience during a session.</p>
                    </li>
                </ul>

                <h2>Disabling Cookies</h2>

                <p>You can disable cookies in your browser settings, but it may affect site functionality. We recommend leaving
                    cookies enabled for a better experience.</p>
                <LogoButton />
                <Spacer />
                <Spacer />
            </div>

            {/* Display the footer of the page */}
            <Footer />
        </div>
    );
}

// Export the Disclaimer component as the default export
export default Disclaimer;
