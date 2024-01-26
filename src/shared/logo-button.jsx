import React from "react";
import logo from './../MMAAlogo_300x300.png';
import './../stylesheets/LogoButton.css';
import { Link } from "react-router-dom";





const LogoButton = () => {
    return (
        <>
            <Link to="/mmaa">
                <img src={logo} className='logo_image'>
                </img>
            </Link>
        </>
    )
}

export default LogoButton;