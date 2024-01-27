import React, { useState, useEffect } from "react";
import "./../stylesheets/CookieConsent.css"

const CookieConsent = () => {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        // Set a cookie or update state to mark user's acceptance
        setAccepted(true);
        localStorage.setItem("cookieConsent", "accepted")
    };

    useEffect(() => {
        // Check if the user has previously accepted the cookie policy
        const localStorageValue = localStorage.getItem("cookieConsent");

        if (localStorageValue === "accepted") {
            setAccepted(true);
        }
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    if (accepted) {
        // Return null if the user has already accepted the cookie policy
        return null;
    }


    return (
        <div id="cookie-policy-prompt" style={{ display: accepted ? 'none' : 'block' }}>
            <p className="cookie-text">We use non-evasive Cookies to speed up the use of the website.</p>
            <p className="cookie-text">We use third-party applications such as Google AdSense that may access and store values on your machine</p>
            <p className="cookie-text">By using this website, you consent to the use of cookies.</p>
            <button onClick={handleAccept}>Accept</button>
        </div>
    );
};

export default CookieConsent;