// These are my imports to get information from CSS file and node modules
import React from 'react';
import './Input.css';

export const Input = (props) => (
    // This is populated depending which button was clicked and the information then comes from the button which was clicked
    // After going to the other components to see what needs to happen with the character it then comes to the input where it is then displayed
    <div className="input">
        {props.input}
    </div>
);