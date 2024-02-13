// Import necessary libraries and components
import React from "react";

import PropTypes from 'prop-types';

// Import styles for the InfoBox component
import './../../stylesheets/InfoBox.css';

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
function InfoBox({ leftdata = {}, rightdata = {}, leftOption, rightOption }) {

    const allFightsString = "All Fights", last3String = 'Last 3 Years'

    function noOfFights(record) {
        var totalFights = 0
        // Splitting the record string into wins, losses, draws, and non-contests
        if (record) {
            try {
                const matches = record.match(/\d+/g);
                if (matches) {
                    const [wins = 0, losses = 0, draws = 0, nonContests = 0] = matches.map(Number);

                    // Summing up wins, losses, draws, and non-contests
                    totalFights = wins + losses + draws + nonContests;

                } else {
                    console.error("No matches found in the record string:", record);
                }
            } catch (error) {
                console.error("Error occurred when parsing record:", error);
            }
            return totalFights.toString(); // Return the total number of fights
        } else {
            return "0"
        }


    }


    const getRecordforOption = (data, option) => {
        switch (option) {
            case allFightsString:
                return data.all_record;
            case last3String:
                return (
                    data['3y_record'] !== "null" ?
                        data['3y_record'] :
                        '0'
                );
            default:
                return [];
        }
    }


    return (
        // Container for the information box
        <div className="infobox-container">
            <table id='info-table'>
                <thead>
                    <tr>
                        <td colSpan={2}>{/* Header for the fighters section */}
                            <h3>Fighters</h3></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table-box">{/* Fighter name for the left side */}
                            <p className="name_box" id="lBox">{leftdata.name} </p></td>
                        <td className="table-box">{/* Fighter name for the right side */}
                            <p className="name_box" id="rBox">{rightdata.name} </p></td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <td colSpan={2}>{/* Header for total fights section */}
                            <h3>W - L - D (NC)</h3></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table-box"><h4>Last {noOfFights(leftdata.l5_record)}</h4>
                        </td>
                        <td className="table-box"><h4>Last {noOfFights(rightdata.l5_record)}</h4></td>
                    </tr>
                    <tr>
                        <td className="table-box">{/* Fighter record for the left side */}
                            <p className="record_box" id="lBox">{leftdata.l5_record} </p>
                            {/* Fighter record for the right side */}
                        </td>
                        <td className="table-box"><p className="record_box" id="rBox">{rightdata.l5_record} </p></td>
                    </tr>
                    <tr>
                        <td className="table-box"><h4>
                            Last {noOfFights(getRecordforOption(leftdata, leftOption))}
                        </h4>
                        </td>
                        <td className="table-box"><h4>
                            Last {noOfFights(getRecordforOption(rightdata, rightOption))}
                        </h4></td>
                    </tr>
                    <tr>
                        <td className="table-box">{/* Fighter record for the left side */}
                            <p className="record_box" id="lBox">{(getRecordforOption(leftdata, leftOption))} </p>
                            {/* Fighter record for the right side */}
                        </td>
                        <td className="table-box"> <p className="record_box" id="rBox">{(getRecordforOption(rightdata, rightOption))} </p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}




// Export the InfoBox component as the default export
export default InfoBox;