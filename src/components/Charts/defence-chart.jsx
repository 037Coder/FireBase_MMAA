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

// Import styles for the DefenceRadarchart component
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
DefenceRadarchart.propTypes = {
    leftData: PropTypes.array,
    rightData: PropTypes.array
};

/**
 * Functional component representing a radar chart for defensive analytics.
 * @function DefenceRadarchart
 * @param {Object} props - Component properties.
 * @param {Object} props.leftdata - Data for the left side of the radar chart.
 * @param {Object} props.rightdata - Data for the right side of the radar chart.
 * @returns {JSX.Element} The rendered DefenceRadarchart component.
 */
function DefenceRadarchart({
    leftdata = [], rightdata = [],
    leftdataL5 = [], rightdataL5 = [],
    optionStringLeft = '', optionStringRight = '' }) {
    // Radar chart data configuration
    const data = {
        labels: ['SigStr', 'Head', 'Body', 'Legs', 'Ttl', 'Distance', 'Clinch', 'Ground'],
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
        }, {
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

// Export the DefenceRadarchart component as the default export
export default DefenceRadarchart;