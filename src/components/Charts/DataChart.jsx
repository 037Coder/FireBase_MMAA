// Import necessary libraries and components
import React from "react";
import { Radar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import {
    Chart as ChartJS,
    LineElement, PointElement,
    Tooltip, Legend,
    RadialLinearScale
} from 'chart.js';

// Import color constants
import { DeepBlue, DeepRed, LightBlue, LightRed } from "./../../shared/colors";

// Import styles for the OverallRadarchart component
import './../../stylesheets/Center.css';

// Import chart options
import chartOptions from './chart-options';

// Register necessary Chart.js components
ChartJS.register(
    LineElement, PointElement,
    Tooltip, Legend,
    RadialLinearScale
);

// PropTypes for type-checking the component's props
DataChart.propTypes = {
    leftData: PropTypes.array,
    rightData: PropTypes.array
  };

  const getLabels = (chartName) => {
    const overall = ['WINS', 'KD Rat', 'SS Acc', 'TTL Acc', 'CTRL', 'TTL Def', 'SS Def', 'TD Rat']
    const standing = ['KD Rat', 'HEAD Suc', 'HEAD Def', 'SS Suc', 'SS Rat', 'SS Def', 'DIS Def', 'DIS Suc']
    const ground = ['TD Rat', 'TD Suc', 'CTRL Rat', 'GRND Suc', 'GRND Rat', 'GRND Def', 'CLINCH Rat', 'TD Def']


    switch(chartName){
        case 'Overall': return overall;
        case 'Standing': return standing;
        case 'Ground': return ground;
    }
  }

  function DataChart({ chartName = '',
    leftdata = [], rightdata = [],
    leftDataLastFive = [], rightDataLastFive = [],
    leftOption = '', rightOption = '' }) {
    // Radar chart data configuration for overall analytics
    const data = {
      labels: getLabels(chartName),
      datasets: [{
        label: 'Last 5',
        data: leftDataLastFive,
        backgroundColor: DeepRed,
        borderColor: DeepRed
      }, {
        label: 'Last 5',
        data: rightDataLastFive,
        backgroundColor: DeepBlue,
        borderColor: DeepBlue
      }, {
        label: leftOption,
        data: leftdata,
        backgroundColor: LightRed,
        borderColor: LightRed
      }, {
        label: rightOption,
        data: rightdata,
        backgroundColor: LightBlue,
        borderColor: LightBlue
      }]
    };
  
    // Radar chart options configuration
    const options = chartOptions;
    return (
      // Container for the radar chart
      <div className="chart">
        {/* Render the Radar chart using react-chartjs-2 */}
        <Radar className='radar' data={data} options={options} />
      </div>
    );
  
  
  }
  // Export the OverallRadarchart component as the default export
  export default DataChart;