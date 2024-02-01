import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./../stylesheets/CookieConsent.css"

const CookieConsent = () => {
    const [accepted, setAccepted] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
    const [rememberChoice, setRememberChoice] = useState(true);

    const handleAccept = () => {
        // Set cookies or update state to mark user's choices
        setAccepted(true);
        if (rememberChoice) {
            localStorage.setItem("cookieConsent", JSON.stringify({
                accepted: true,
                analyticsEnabled,
                rememberChoice
            }))
        }
        ;
    };

    const handleAnalyticsToggle = () => {
        setAnalyticsEnabled(!analyticsEnabled);
    };

    const handleRememberChoiceToggle = () => {
        setRememberChoice(!rememberChoice);
    };

    useEffect(() => {
        // Check if the user has previously accepted the cookie policy and retrieve saved choices
        const localStorageValue = localStorage.getItem("cookieConsent");

        if (localStorageValue) {
            const { accepted, analyticsEnabled, rememberChoice } = JSON.parse(localStorageValue);
            setAccepted(accepted);
            setAnalyticsEnabled(analyticsEnabled);
            setRememberChoice(rememberChoice);
        }
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    if (accepted) {
        // Return null if the user has already accepted the cookie policy
        return null;
    }

    return (
        <div id="cookie-policy-prompt" style={{ display: accepted ? 'none' : 'block' }}>
            <h1>Cookie Consent</h1>
            <table id="consent-table">
                <tbody>
                    <tr>
                        <td>Anonymous analytics for performance</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" checked={analyticsEnabled} onChange={handleAnalyticsToggle} />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Remember my Cookies choice</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" checked={rememberChoice} onChange={handleRememberChoiceToggle} />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">Temporary data is stored for website functionality.</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><Link to="/disclaimer#cookie-policy">More information here</Link></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button onClick={handleAccept}>Save</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CookieConsent;