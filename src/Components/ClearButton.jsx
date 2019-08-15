// These are my imports to get information from CSS file and node modules
import React from 'react';
import './ClearButton.css';

export const ClearButton = (props) => (
    // Upon clicking the "Clear" button it replaces everything in the "input" screen with empty ""
    <div className="clear-btn" onClick={props.clear}>
        {props.children}
    </div>
);