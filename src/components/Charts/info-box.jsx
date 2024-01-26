// Import necessary libraries and components
import React from "react";

import PropTypes from 'prop-types';

// Import styles for the InfoBox component
import './../../stylesheets/Center.css';

// PropTypes for type-checking the component's props
InfoBox.propTypes = {
    leftData: PropTypes.object,
    rightData: PropTypes.object
};

/**
 * Functional component representing an information box for fighters.
 * @function InfoBox
 * @param {Object} props - Component properties.
 * @param {Object} props.leftdata - Data for the left side of the information box.
 * @param {Object} props.rightdata - Data for the right side of the information box.
 * @returns {JSX.Element} The rendered InfoBox component.
 */
function InfoBox({ leftdata={}, rightdata={} }) {
    return (
        // Container for the information box
        <div className="infobox-container">
            {/* Header for the fighters section */}
            <h3>Fighters</h3>
            {/* Container for the fighter names */}
            <div className="box-container">
                {/* Fighter name for the left side */}
                <p className="name_box" id="lBox">{leftdata.name} </p>
                {/* Fighter name for the right side */}
                <p className="name_box" id="rBox">{rightdata.name} </p>
            </div>
            {/* Header for the W - L - D (NC) section */}
            <h3>W - L - D (NC)</h3>
            {/* Container for the fighter records */}
            <div className="box-container">
                {/* Fighter record for the left side */}
                <p className="record_box" id="lBox">{leftdata.record} </p>
                {/* Fighter record for the right side */}
                <p className="record_box" id="rBox">{rightdata.record} </p>
            </div>
        </div>
    );
}

// Export the InfoBox component as the default export
export default InfoBox;