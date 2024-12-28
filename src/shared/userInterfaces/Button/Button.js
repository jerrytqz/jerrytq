import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={[
        classes.Container,
        props.className ? props.className : '',
      ].join(' ')}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};

export default Button;
