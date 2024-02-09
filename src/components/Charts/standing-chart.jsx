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
import { DeepBlue, DeepRed, CadetGray, OldRose } from "./../../shared/colors";

// Import styles for the StandingRadarchart component
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
StandingRadarchart.propTypes = {
    leftData: PropTypes.array,
    rightData: PropTypes.array
};

/**
 * Functional component representing a radar chart for standing analytics.
 * @function StandingRadarchart
 * @param {Object} props - Component properties.
 * @param {Object} props.leftdata - Data for the left side of the radar chart.
 * @param {Object} props.rightdata - Data for the right side of the radar chart.
 * @returns {JSX.Element} The rendered StandingRadarchart component.
 */
function StandingRadarchart({
    leftdata = [], rightdata = [],
    leftdataL5 = [], rightdataL5 = [],
    optionStringLeft = '', optionStringRight = '' }) {
    // Radar chart data configuration for standing analytics
    const data = {
        labels: ['KD Rat', 'HEAD Suc', 'HEAD Def', 'SS Suc', 'SS Rat', 'SS Def', 'DIS Def', 'DIS Suc'],
        datasets: [{
            label: 'Last 5',
            data: leftdataL5,
            backgroundColor: DeepRed,
            borderColor: DeepRed
        }, {
            label: 'Last 5',
            data: rightdataL5,
            backgroundColor: DeepBlue,
            borderColor: DeepBlue
        },{
            label: optionStringLeft,
            data: leftdata,
            backgroundColor: OldRose,
            borderColor: OldRose
        }, {
            label: optionStringRight,
            data: rightdata,
            backgroundColor: CadetGray,
            borderColor: CadetGray
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

// Export the StandingRadarchart component as the default export
export default StandingRadarchart;