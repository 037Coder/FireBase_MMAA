import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './../stylesheets/Menu.css'

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  document.addEventListener("click", (event) => {
    if (menuOpen && !event.target.closest(".dropdown") && event.target !== document.querySelector(".dropdown")) {
      closeMenu();
    }
  })
  const handleFaBarsClick = () => {
    toggleMenu;
    // Additional logic for FaBars click if needed
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleMenu}>
        <FaBars />
        </button>
      {menuOpen && (
        <ul className="dropdown-content">
          <li className='menu-item'><Link to="/mmaa"><strong>App</strong></Link></li>
          <li className='menu-item'><Link to="/">Home</Link></li>
          <li className='menu-item'><Link to="/about">About</Link></li>
          <li className='menu-item'><Link to="/calculations">Calculations</Link></li>
          <li className='menu-item'><Link to="/disclaimer">Disclaimer</Link></li>
          <li className='menu-item'><Link to="/contact">Contact</Link></li>
        </ul>
      )}

    </div>

  );
}

export default Menu;
