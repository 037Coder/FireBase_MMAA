// Import necessary libraries and components
import React from 'react';

// Import styles for the Header component
import './../stylesheets/Header.css';


import LogoButton from './../shared/logo-button';

import Menu from './Menu'

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
      <Menu />
    </header>
  );
};

// Export the Header component as the default export
export default Header;