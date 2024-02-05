import React from 'react';
import './../../stylesheets/Adstyle.css';

/**
 * Functional component representing a banner ad example.
 * @function BannerAdExample
 * @returns {JSX.Element} The rendered BannerAdExample component.
 */
const BannerAdspace = () => {
  return (
    // Container for the banner ad
    <div className='Banner_Ad_container'>
      {/* Banner ad image sourced from the specified URL */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1868604488206980"
        crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1868604488206980"
        data-ad-slot="9266828340"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script>
    </div>
  );
}

// Export the BannerAdExample component as the default export
export default BannerAdspace;
