import React, { useState, useEffect } from "react";
import "./../../stylesheets/DataTables.css"
import TableSpan from "./TableSpan";

// Import color constants
import { DeepBlue, DeepRed, LightBlue, LightRed } from "../../shared/colors";

function DataTable(
    { leftdata = [], rightdata = [],
        leftDataLastFive = [], rightDataLastFive = [],
        leftOption = '', rightOption = '' }) {


    const labels = [
        "Sig Strikes", "Head", 
        "Body", "Legs", "Ttl Strikes", 
        "Distance", "Clinch", "Ground",
    ];

    const getLabel = (labelNumber) => {

        return labels[labelNumber];
    };


    const shortenOption = (pick) => {
        switch (pick) {
            case "Last 5": return "L5";
            case "Last 3 Years": return "3Y";
            case "All Fights": return "A";
        }
    }

    const getLeftDataCell = (l5_data, option_data, index) => {
        return (
            <td className="left-table-data">
                <TableSpan
                    data={l5_data} index={index}
                    background={DeepRed}
                    className={"left-l5-data"} />
                <TableSpan
                    data={option_data} index={index}
                    background={LightRed}
                    className={"left-option-data"} />
            </td>
        );
    };

    const getRightDataCell = (l5_data, option_data, index) => {
        return (
            <td className="right-table-data">
            <TableSpan
                data={l5_data} index={index}
                background={DeepBlue}
                className={"right-l5-data"} />
            <TableSpan
                data={option_data} index={index}
                background={LightBlue}
                className={"right-option-data"} />
        </td>
        );
    };



    const getTableBody = () => {
        return labels.map((value, index) => (
            <tr key={index} className="data-table-row">
                {getLeftDataCell(leftDataLastFive, leftdata, index)}
                <td>
                    <span className="left-l5-label">{shortenOption("Last 5")}</span>
                    <span className="left-option-label">{shortenOption(leftOption)}</span>
                </td>
                <td className="data-table-label">{getLabel(index)}</td>
                <td>
                    <span className="right-l5-label">{shortenOption("Last 5")}</span>
                    <span className="right-option-label">{shortenOption(rightOption)}</span>
                </td>
                {getRightDataCell(rightDataLastFive, rightdata, index)}
            </tr>
        ));
    };



    return (
        <table className="data-table">
            <thead className="data-table-head">
                <tr>
                    <td colSpan={5}
                        className="table-data-label"></td>
                </tr>
            </thead>
            <tbody className="data-table-body">
                {getTableBody()}
            </tbody>
        </table>
    );
}

export default DataTable;