import React from "react";
import "./../../stylesheets/ChartMenu.css"

const ChartMenu = () => {


    return (
        <div className="chart-menu">
            <a href='#info' className="chart-button">Info
            </a>
            <a href='#overall-chart' className="chart-button">Overall
            </a>
            <a href='#standing-chart' className="chart-button">Standing
            </a>
            <a href='#ground-chart' className="chart-button">
                Ground
            </a>
            <a href='#success-chart' className="chart-button">Success
            </a>
            <a href='#defence-chart' className="chart-button">Defence
            </a>
            <a href='#ratio-chart' className="chart-button">Ratio
            </a>
        </div>
    )
}

export default ChartMenu