import React from "react";
import logo from './../Logo Round_p-1.png';
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