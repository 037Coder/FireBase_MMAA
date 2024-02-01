import React from "react";
import "./../stylesheets/Pages.css";

/**
 * Spacer component represents a vertical space with a standard size.
 * @function Spacer
 * @returns {JSX.Element} - Spacer component JSX.
 */
const Spacer = () => {
    return (
        <div className="spacer"></div>
    )
}

/**
 * MiniSpacer component represents a smaller vertical space.
 * @function MiniSpacer
 * @returns {JSX.Element} - MiniSpacer component JSX.
 */
const MiniSpacer = () => {
    return (
        <div className="mini-spacer"></div>
    )
}

// Export Spacer and MiniSpacer components
export {Spacer, MiniSpacer};
