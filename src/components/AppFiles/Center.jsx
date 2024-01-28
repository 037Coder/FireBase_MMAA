// Import necessary libraries and components
import React, { useRef, useEffect } from 'react';

// Import styles for the Center component
import './../../stylesheets/Center.css';

// Import various radar chart components and other components
import OverallRadarchart from '../Charts/overall-chart';
import SuccessRadarchart from '../Charts/success-chart';
import DefenceRadarchart from '../Charts/defence-chart';
import RatioRadarchart from '../Charts/ratio-chart';
import StandingRadarchart from '../Charts/standing-chart';
import GroundRadarchart from '../Charts/ground-chart';
import InfoBox from '../Charts/info-box';
import BannerAdExample from '../Ads/Banner-Adspace';
import PropTypes from 'prop-types';


const validateFighterData = (propValue, key) => {
  if (!propValue || !propValue.hasOwnProperty(key) || !Array.isArray(propValue[key])) {
    return new Error(`Invalid ${key} data in fighter object`);
  }
  return {};
};


/**
 * Functional component representing the central content of the application.
 * @function Center
 * @returns {JSX.Element} The rendered Center component.
 */
const Center = ({ rightObject, leftObject }) => {
  // Parse JSON data with a fallback to null if parsing fails
  const leftData = leftObject ? JSON.parse(leftObject) : {};
  const rightData = rightObject ? JSON.parse(rightObject) : {};
  //console.log(leftData);
  //console.log(rightData);

  const centerRef = useRef();

  useEffect(() => {
    // Scroll to the top when leftObject or rightObject is updated
    window.scrollTo(
      {
        top: centerRef.offSetTop,
        left: 0,
        behaviour: "smooth",
      }
    )
  }, [leftData, rightData]);



  return (
    // Main container for the central content of the application
    <div className="center"> 
      <div className="graph-container">
          {/* List of content containers */}
          <div className="graph-content-list">
          {/* InfoBox component displaying information about the data */}
            <div className="graph-content" ref={centerRef}>
              <InfoBox leftdata={leftData} rightdata={rightData} />
              <BannerAdExample />
            </div>

          {/* Overall Analytics radar chart */}
            <div className="graph-content">
              <h3>Overall Analytics</h3>
              <OverallRadarchart className='Ad-checker'
                leftdata={leftData.Dataset?.Overall ?? []}
                rightdata={rightData.Dataset?.Overall ?? []} />
              <BannerAdExample />
            </div>

          {/* Ad Space container allows the user to see an entire background Ad */}
            <div className="Ad-Space"></div>

          {/* Success Analytics radar chart */}
            <div className="graph-content">
              <h3>Success Analytics</h3>
              <SuccessRadarchart className='Ad-checker'
                leftdata={leftData.Dataset?.Attack ?? []}
                rightdata={rightData.Dataset?.Attack ?? []} />
              <BannerAdExample />
            </div>

          {/* Defence Analytics radar chart */}
            <div className="graph-content">
              <h3>Defence Analytics</h3>
              <DefenceRadarchart className='Ad-checker'
                leftdata={leftData.Dataset?.Defence ?? []}
                rightdata={rightData.Dataset?.Defence ?? []} />
              <BannerAdExample />
            </div>

          {/* Ratio Analytics radar chart */}
            <div className="graph-content">
              <h3>Ratio Analytics</h3>
              <RatioRadarchart className='Ad-checker'
                leftdata={leftData.Dataset?.Ratio ?? []}
                rightdata={rightData.Dataset?.Ratio ?? []} />
              <BannerAdExample />
            </div>

          {/* Ad Space container allows the user to see an entire background Ad */}
            <div className="Ad-Space"></div>

          {/* Standing Analytics radar chart */}
            <div className="graph-content">
              <h3>Standing Analytics</h3>
              <StandingRadarchart className='Ad-checker'
                leftdata={leftData.Dataset?.Standing ?? []}
                rightdata={rightData.Dataset?.Standing ?? []} />
              <BannerAdExample />
            </div>

          {/* Ground Analytics radar chart */}
            <div className="graph-content">
              <h3>Ground Analytics</h3>
              <GroundRadarchart className='Ad-checker'
                leftdata={leftData.Dataset?.Ground ?? []}
                rightdata={rightData.Dataset?.Ground ?? []} />
              <BannerAdExample />
            </div>
          </div>
      </div>
    </div >
  );
}

Center.propTypes = {
  leftObject: PropTypes.string, // Assuming leftObject is a JSON string
  rightObject: PropTypes.string, // Assuming rightObject is a JSON string
};
// Export the Center component as the default export
export default Center;