import React from 'react';
import './../../stylesheets/Main.css'
import Header from '../../shared/Header';

const RotatePrompt = () => {


    return (
        <>
            <div className="rotate-prompt">
                <p className='rotate-prompt-text'>
                    Search in Portrait
                </p>
                <p className='rotate-prompt-text'>
                    Analyze in Landscape
                </p>
            </div>
        </>
    )

}

export default RotatePrompt;