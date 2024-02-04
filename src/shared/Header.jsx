// Import components and stylesheets
import React from 'react';
import './../stylesheets/Header.css';
import LogoButton from './../shared/logo-button';
import Menu from './Menu'
import reddit_logo from './../reddit-icon.svg'
import x_logo from './../x-icon.svg'

/**
 * Functional component representing the header of the application.
 * @function Header
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
  return (
    // Header element with a specified class name
    <header className="header">

      <div className="header_logo">
        {/* Logo image sourced from the specified path */}
        <LogoButton />
      </div>

      <div className='mini-menu'>
        <a className='social-media-icons-container' href='https://twitter.com/mmaanalytica'>
          <img className='social-media-icons' src={x_logo}></img>
        </a>
      </div>
      <Menu />
    </header >
  );
};

// Export the Header component as the default export
export default Header;