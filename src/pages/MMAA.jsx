import { React, useState, useEffect } from "react";
//import Footer from "./../shared/Footer"; //Application Footer removed 
import Header from "./../shared/Header";
import Main from "./../components/AppFiles/Main";
import RotatePrompt from "../components/AppFiles/RotatePrompt";

const MMAA = () => {

    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth && window.innerWidth < 750);

    useEffect(() => {
        const handleResize = () => {

            setIsPortrait(window.innerHeight > window.innerWidth && window.innerWidth < 750);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            {/* Render the Header component if the window height is greater than 450 pixels */}
            {<Header />}

            {/* Render the Main component */}
            <Main />
            {isPortrait && (
                <RotatePrompt />
            )}
        </>
    )


}

export default MMAA;