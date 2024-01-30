import { React, useState, useEffect } from "react";
//import Footer from "./../shared/Footer"; //Application Footer removed 
import Header from "./../shared/Header";
import Main from "./../components/AppFiles/Main";
import RotatePrompt from "../components/AppFiles/RotatePrompt";

const MMAA = () => {
    const [showPrompt, setShowPrompt] = useState(window.innerWidth < 601);

    useEffect(() => {
        const handleResize = () => {
            setShowPrompt(window.innerWidth < 601 || 
                (window.innerHeight < 
                    window.innerWidth && 
                    window.Width < 950));
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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