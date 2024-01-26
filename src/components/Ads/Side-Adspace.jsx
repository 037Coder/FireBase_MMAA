// Import necessary libraries and components
import React from 'react';

// Import styles for the sideAdspace component
import './../../stylesheets/Main.css';

/**
 * Functional component representing a side ad space.
 * @function sideAdspace
 * @returns {JSX.Element} The rendered sideAdspace component.
 */
const sideAdspace = () => {
  return (
    // Container for the side ad
    <div className='Ad_container'>
      {/* Ad loaded from Adspace */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1868604488206980"
        crossOrigin="anonymous"></script>
      {/*sideAd*/}
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1868604488206980"
        data-ad-slot="4021723608"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script>
    </div>
  );
}

// Export the sideAdspace component as the default export
export default sideAdspace;