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

// Import styles for the GroundRadarchart component
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
GroundRadarchart.propTypes = {
    leftData: PropTypes.array,
    rightData: PropTypes.array
};

/**
 * Functional component representing a radar chart for ground analytics.
 * @function GroundRadarchart
 * @param {Object} props - Component properties.
 * @param {Object} props.leftdata - Data for the left side of the radar chart.
 * @param {Object} props.rightdata - Data for the right side of the radar chart.
 * @returns {JSX.Element} The rendered GroundRadarchart component.
 */
function GroundRadarchart({
    leftdata = [], rightdata = [],
    leftDataLastFive = [], rightDataLastFive = [],
    leftOption = '', rightOption = '' }) {
    // Radar chart data configuration for ground analytics
    const data = {
        labels: ['TD Rat', 'TD Suc', 'CTRL Rat', 'GRND Suc', 'GRND Rat', 'GRND Def', 'CLINCH Rat', 'TD Def'],
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
            <Radar data={data} options={options} />
        </div>
    );
}

// Export the GroundRadarchart component as the default export
export default GroundRadarchart;