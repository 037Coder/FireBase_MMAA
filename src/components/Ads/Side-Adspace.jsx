import React from 'react';
import './../../stylesheets/Adstyle.css';
import ad from './../../Ad_Example.png'

/**
 * Functional component representing a side ad space.
 * @function sideAdspace
 * @returns {JSX.Element} The rendered sideAdspace component.
 */
const SideAdspace = () => {
  return (
    // Container for the side ad
    <div className='Ad_container'>
      <img className='ad_image' src={ad}></img>
    </div>
  );
}

// Export the sideAdspace component as the default export
export default SideAdspace;

/**
 * 
 */