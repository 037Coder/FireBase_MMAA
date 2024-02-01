// Import necessary components
import { React, useState, useEffect } from "react";
import Header from "./../shared/Header";
import Main from "./../components/AppFiles/Main";
import RotatePrompt from "../components/AppFiles/RotatePrompt";
import { logPageVisit } from "../utils/StorageConfig";

/**
 * MMAA (MMA Analytica App) component for rendering the main application content.
 * @function MMAA
 * @returns {JSX.Element} - MMAA component JSX.
 */
const MMAA = () => {
    // State to control the visibility of the rotate prompt
    const [showPrompt, setShowPrompt] = useState(window.innerWidth < 601);

    useEffect(() => {
        // Function to handle resize events and update showPrompt state
        const handleResize = () => {
            setShowPrompt(window.innerWidth < 601 || 
                (window.innerHeight < 
                    window.innerWidth && 
                    window.innerWidth < 950));
        };

        // Attach the event listener for resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        logPageVisit('App')
    }, [])

    return (
        <div className="page-container">
            {/* Render the Header component if the window height is greater than 450 pixels */}
            {<Header />}

            {/* Render the Main component */}
            <Main />

            {/* Render the RotatePrompt only if showPrompt is true */}
            {showPrompt && <RotatePrompt />}
        </div>
    );
};

// Export the MMAA component as the default export
export default MMAA;
