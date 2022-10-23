import React from 'react';
import classes from './Button.module.css'; 

const Button = (props) => {
    const buttonClasses = [classes.Button];
    if (props.buttonClass) buttonClasses.push(props.buttonClass);

    return (
        <button 
            className={buttonClasses.join(' ')}
            onClick={props.onClick} 
            disabled={props.disabled}
            style={props.style}
        >
            {props.children}
        </button>
    );
};

export default Button; 
