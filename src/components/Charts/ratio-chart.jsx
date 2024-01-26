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
import { DeepBlue, DeepRed } from "./../../shared/colors";

// Import styles for the RatioRadarchart component
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
RatioRadarchart.propTypes = {
    leftData: PropTypes.array,
    rightData: PropTypes.array
};

/**
 * Functional component representing a radar chart for ratio analytics.
 * @function RatioRadarchart
 * @param {Object} props - Component properties.
 * @param {Object} props.leftdata - Data for the left side of the radar chart.
 * @param {Object} props.rightdata - Data for the right side of the radar chart.
 * @returns {JSX.Element} The rendered RatioRadarchart component.
 */
function RatioRadarchart({ leftdata=[], rightdata=[] }) {
    // Radar chart data configuration for ratio analytics
    const data = {
        labels: ['SigStr', 'Head', 'Body', 'Legs', 'Ttl', 'Distance', 'Clinch', 'Ground'],
        datasets: [{
            label: '',
            data: leftdata,
            backgroundColor: DeepRed,
            borderColor: DeepRed
        }, {
            label: '',
            data: rightdata,
            backgroundColor: DeepBlue,
            borderColor: DeepBlue
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

// Export the RatioRadarchart component as the default export
export default RatioRadarchart;