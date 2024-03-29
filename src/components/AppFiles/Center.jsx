// Import necessary components and stylesheets
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataTable from '../Charts/DataTable';
import InfoBox from '../Charts/info-box';
import BannerAdExample from '../Ads/Banner-Adspace';
import ad from './../../Ad_Example.png'
import { FaArrowUp } from 'react-icons/fa';
import DataChart from '../Charts/DataChart';

/**
 * Functional component representing the central content of the application.
 * @function Center
 * @param {Object} props - Component properties.
 * @param {string} props.leftObject - JSON data for the left object.
 * @param {string} props.rightObject - JSON data for the right object.
 * @returns {JSX.Element} The rendered Center component.
 */
const Center = ({ leftObject, rightObject, leftOption, rightOption }) => {
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

      <a href='#top'>
        <div id='scroll-up'>
          <FaArrowUp style={
            {
              color: 'white',
              fontSize: '55px'
            }} />
        </div>
      </a>

      <div className="graph-container">
        {/* List of content containers */}
        <div className="graph-content-list">
          {/* InfoBox component displaying information about the data */}
          <div className="graph-content" ref={centerRef} id='info'>


            <InfoBox
              leftdata={leftData} rightdata={rightData}
              leftOption={leftOption} rightOption={rightOption}
            />
            <BannerAdExample />
          </div>

          {/* Overall Analytics radar chart */}
          <div className="graph-content">
            <h3 id='overall-chart'>Overall Analytics</h3>
            <DataChart chartName='Overall'
              className='Ad-checker'
              leftdata={getDataForOption(leftData, leftOption, 'Overall')}
              rightdata={getDataForOption(rightData, rightOption, 'Overall')}
              leftDataLastFive={leftData.l5_data?.Dataset.Overall ?? []}
              rightDataLastFive={rightData.l5_data?.Dataset.Overall ?? []}
              leftOption={leftOption} rightOption={rightOption}
            />
            <BannerAdExample />
          </div>
          {/* Standing Analytics radar chart */}
          <div className="graph-content">
            <h3 id='standing-chart'>Standing Analytics</h3>
            <DataChart chartName='Standing'
              className='Ad-checker'
              leftdata={getDataForOption(leftData, leftOption, 'Standing')}
              rightdata={getDataForOption(rightData, rightOption, 'Standing')}
              leftDataLastFive={leftData.l5_data?.Dataset.Standing ?? []}
              rightDataLastFive={rightData.l5_data?.Dataset.Standing ?? []}
              leftOption={leftOption} rightOption={rightOption}
            />
            <BannerAdExample />
          </div>

          {/* Ground Analytics radar chart */}
          <div className="graph-content">
            <h3 id='ground-chart'>Ground Analytics</h3>
            <DataChart chartName='Ground'
              className='Ad-checker'
              leftdata={getDataForOption(leftData, leftOption, 'Ground')}
              rightdata={getDataForOption(rightData, rightOption, 'Ground')}
              leftDataLastFive={leftData.l5_data?.Dataset.Ground ?? []}
              rightDataLastFive={rightData.l5_data?.Dataset.Ground ?? []}
              leftOption={leftOption} rightOption={rightOption}
            />
            <BannerAdExample />
          </div>
          {/* Success Analytics radar chart */}
          <div className="graph-content">
            <h3 id='success-chart'>Success Analytics</h3>
            <DataTable
              leftdata={getDataForOption(leftData, leftOption, 'Attack')}
              rightdata={getDataForOption(rightData, rightOption, 'Attack')}
              leftDataLastFive={leftData.l5_data?.Dataset.Attack ?? []}
              rightDataLastFive={rightData.l5_data?.Dataset.Attack ?? []}
              leftOption={leftOption} rightOption={rightOption}
            />

            <BannerAdExample />
          </div>

          {/* Defence Analytics radar chart */}
          <div className="graph-content">
            <h3 id='defence-chart'>Defence Analytics</h3>
            <DataTable
              leftdata={getDataForOption(leftData, leftOption, 'Defence')}
              rightdata={getDataForOption(rightData, rightOption, 'Defence')}
              leftDataLastFive={leftData.l5_data?.Dataset.Defence ?? []}
              rightDataLastFive={rightData.l5_data?.Dataset.Defence ?? []}
              leftOption={leftOption} rightOption={rightOption}
            />

            <BannerAdExample />
          </div>

          {/* Ratio Analytics radar chart */}
          <div className="graph-content">
            <h3 id='ratio-chart'>Ratio Analytics</h3>
            <DataTable
              leftdata={getDataForOption(leftData, leftOption, 'Ratio')}
              rightdata={getDataForOption(rightData, rightOption, 'Ratio')}
              leftDataLastFive={leftData.l5_data?.Dataset.Ratio ?? []}
              rightDataLastFive={rightData.l5_data?.Dataset.Ratio ?? []}
              leftOption={leftOption} rightOption={rightOption}
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
  leftObject: PropTypes.string,
  rightObject: PropTypes.string,
};

// Export the Center component as the default export
export default Center;
