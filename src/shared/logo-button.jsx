import React from "react";
import logo from './../MMAA_Logo_300x300.png';
import './../stylesheets/LogoButton.css';
import { Link } from "react-router-dom";

/**
 * LogoButton component represents a clickable logo that redirects to the MMAA main page.
 * @function LogoButton
 * @returns {JSX.Element} - LogoButton component JSX.
 */
const LogoButton = () => {
    return (
        <>
            {/* Link to the MMAA main page */}
            <Link to="/mmaa">
                {/* MMAA logo image with a CSS class */}
                <img src={logo} className='logo_image' alt="MMAA Logo"></img>
            </Link>
        </>
    )
}

// Export the LogoButton component as the default export
export default LogoButton;
