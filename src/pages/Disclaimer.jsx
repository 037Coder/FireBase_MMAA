
// Import the 'Header', 'Footer', and Stylesheet
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import './../stylesheets/Pages.css';
import { Spacer, MiniSpacer } from '../shared/Spacer';
import LogoButton from '../shared/logo-button';

const Disclaimer = () => {
    return (
        <div>
            <Header />
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
                <LogoButton />
                <Spacer />
                <Spacer />
            </div>
            <Footer />
        </div>
    );
}

export default Disclaimer;