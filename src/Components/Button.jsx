// These are my imports to get information from CSS file and node modules
import React from 'react';
import './Button.css';

// This checks and seperates the values from the operators to make sure that the operators don't throw errors 
// and are rather used to calculate the answer
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

 export const Button = props => (
    <div 
    // Calls the "isOperator" function to determine whether it is indeed an operator or not
    className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    // Upon clicking the button, the character within the button whether it be a number or an operatot is added to the input
    // This information is then sent to App.js where it then used further
    onClick={() => props.click(props.children)}>
    {props.children}
    </div>
);