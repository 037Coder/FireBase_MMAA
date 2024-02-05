// Import necessary components and stylesheets
import React from 'react';
import './../../stylesheets/Phone.css';

/**
 * Functional component representing a rotate prompt.
 * @function RotatePrompt
 * @returns {JSX.Element} The rendered RotatePrompt component.
 */
const RotatePrompt = () => {

    return (
        <>
            {/* Container for the rotate prompt */}
            <div className="rotate-prompt">
                {/* Text prompting to search in portrait */}
                <p className='rotate-prompt-text'>
                    Search in Portrait
                </p>
                {/* Text prompting to analyze in landscape */}
                <p className='rotate-prompt-text'>
                    Analyze in Landscape
                </p>
            </div>
        </>
    );
};

// Export the RotatePrompt component as the default export
export default RotatePrompt;
