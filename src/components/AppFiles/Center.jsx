// Import necessary components and stylesheets
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import OverallRadarchart from '../Charts/overall-chart';
import SuccessRadarchart from '../Charts/success-chart';
import DefenceRadarchart from '../Charts/defence-chart';
import RatioRadarchart from '../Charts/ratio-chart';
import StandingRadarchart from '../Charts/standing-chart';
import GroundRadarchart from '../Charts/ground-chart';
import InfoBox from '../Charts/info-box';
import BannerAdExample from '../Ads/Banner-Adspace';
import ad from './../../Ad_Example.png'

/**
 * Functional component representing the central content of the application.
 * @function Center
 * @param {Object} props - Component properties.
 * @param {string} props.leftObject - JSON data for the left object.
 * @param {string} props.rightObject - JSON data for the right object.
 * @returns {JSX.Element} The rendered Center component.
 */
const Center = ({ leftObject={}, rightObject={}, leftOption, rightOption }) => {
  // Parse JSON data with a fallback to an empty object if parsing fails
  const leftData = leftObject ? JSON.parse(leftObject) : {};
  const rightData = rightObject ? JSON.parse(rightObject) : {};

  // Function to get the data based on the selected option and chart type
  const getDataForOption = (data, option, chartType) => {
    //console.log(option)
    switch (option) {
      case 'All Fights':
        return data.all_data?.Dataset[chartType] ?? [];
      case 'Last 3 Years':
        return (
          data['3y_data'] && data['3y_data'].Dataset) ?
          data['3y_data'].Dataset[chartType] ??
          [] : [];
      default:
        return [];
    }
  };

  // Function to get the last5 data
  const getLast5Data = (data, chartType) => {
    return data.last5?.Dataset[chartType] ?? [];
  }

  // Reference to the center element for scrolling
  const centerRef = useRef();

  useEffect(() => {
    // Scroll to the top when leftObject or rightObject is updated
    window.scrollTo({
      top: centerRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }, [leftData, rightData]);

  return (
    // Main container for the central content of the application
    <div className="center" style={{ backgroundImage: `url(${ad})` }}>
      <div className="graph-container">
        {/* List of content containers */}
        <div className="graph-content-list">
          {/* InfoBox component displaying information about the data */}
          <div className="graph-content" ref={centerRef}>
            <InfoBox
              leftdata={leftData} rightdata={rightData}
              leftOption={leftOption} rightOption={rightOption} />
            <BannerAdExample />
          </div>

          {/* Overall Analytics radar chart */}
          <div className="graph-content">
            <h3>Overall Analytics</h3>
            <OverallRadarchart
              className='Ad-checker'
              leftDataL5={getLast5Data(leftData, 'Overall')}
              rightDataL5={getLast5Data(rightData, 'Overall')}
              leftdata={getDataForOption(leftData, leftOption, 'Overall')}
              rightdata={getDataForOption(rightData, rightOption, 'Overall')}
              optionStringLeft={leftOption}
              optionStringRight={rightOption}
            />
            <BannerAdExample />
          </div>

          {/* Success Analytics radar chart */}
          <div className="graph-content">
            <h3>Success Analytics</h3>
            <SuccessRadarchart
              className='Ad-checker'
              leftDataL5={getLast5Data(leftData, 'Attack')}
              rightDataL5={getLast5Data(rightData, 'Attack')}
              leftdata={getDataForOption(leftData, leftOption, 'Attack')}
              rightdata={getDataForOption(rightData, rightOption, 'Attack')}
              optionStringLeft={leftOption}
              optionStringRight={rightOption}
            />
            <BannerAdExample />
          </div>

          {/* Defence Analytics radar chart */}
          <div className="graph-content">
            <h3>Defence Analytics</h3>
            <DefenceRadarchart
              className='Ad-checker'
              leftDataL5={getLast5Data(leftData, 'Defence')}
              rightDataL5={getLast5Data(rightData, 'Defence')}
              leftdata={getDataForOption(leftData, leftOption, 'Defence')}
              rightdata={getDataForOption(rightData, rightOption, 'Defence')}
              optionStringLeft={leftOption}
              optionStringRight={rightOption}
            />
            <BannerAdExample />
          </div>

          {/* Ratio Analytics radar chart */}
          <div className="graph-content">
            <h3>Ratio Analytics</h3>
            <RatioRadarchart
              className='Ad-checker'
              leftDataL5={getLast5Data(leftData, 'Ratio')}
              rightDataL5={getLast5Data(rightData, 'Ratio')}
              leftdata={getDataForOption(leftData, leftOption, 'Ratio')}
              rightdata={getDataForOption(rightData, rightOption, 'Ratio')}
              optionStringLeft={leftOption}
              optionStringRight={rightOption}
            />
            <BannerAdExample />
          </div>

          {/* Standing Analytics radar chart */}
          <div className="graph-content">
            <h3>Standing Analytics</h3>
            <StandingRadarchart
              className='Ad-checker'
              leftDataL5={getLast5Data(leftData, 'Standing')}
              rightDataL5={getLast5Data(rightData, 'Standing')}
              leftdata={getDataForOption(leftData, leftOption, 'Standing')}
              rightdata={getDataForOption(rightData, rightOption, 'Standing')}
              optionStringLeft={leftOption}
              optionStringRight={rightOption}
            />
            <BannerAdExample />
          </div>

          {/* Ground Analytics radar chart */}
          <div className="graph-content">
            <h3>Ground Analytics</h3>
            <GroundRadarchart
              className='Ad-checker'
              leftDataL5={getLast5Data(leftData, 'Ground')}
              rightDataL5={getLast5Data(rightData, 'Ground')}
              leftdata={getDataForOption(leftData, leftOption, 'Ground')}
              rightdata={getDataForOption(rightData, rightOption, 'Ground')}
              optionStringLeft={leftOption}
              optionStringRight={rightOption}
            />
            <BannerAdExample />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Prop validation method to ensure correct data format.
 * @function validateFighterData
 * @param {Object} propValue - The value of the prop.
 * @param {string} key - The key corresponding to the prop.
 * @returns {Error} - Error object if validation fails, otherwise an empty object.
 */
const validateFighterData = (propValue, key) => {
  if (!propValue || !propValue.hasOwnProperty(key) || !Array.isArray(propValue[key])) {
    return new Error(`Invalid ${key} data in fighter object`);
  }
  return {};
};

// Declare propTypes to recognize data
Center.propTypes = {
  leftObject: PropTypes.object,
  rightObject: PropTypes.object,
};

// Export the Center component as the default export
export default Center;
