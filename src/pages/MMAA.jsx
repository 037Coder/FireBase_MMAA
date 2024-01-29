import { React, useState, useEffect } from "react";
//import Footer from "./../shared/Footer"; //Application Footer removed 
import Header from "./../shared/Header";
import Main from "./../components/AppFiles/Main";
import RotatePrompt from "../components/AppFiles/RotatePrompt";

const MMAA = () => {
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowPrompt(window.innerWidth < 601 || 
                (window.innerHeight < 
                    window.innerWidth && 
                    window.Width <950));
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Hide the prompt after 5 seconds (adjust the time as needed)
        const timeoutId = setTimeout(() => {
            setShowPrompt(false);
        }, 3500); // 5000 milliseconds = 5 seconds

        // Clean up the timeout on component unmount
        return () => {
            clearTimeout(timeoutId);
        };
    }); // Empty dependency array ensures this effect runs only once on mount

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

export default MMAA;