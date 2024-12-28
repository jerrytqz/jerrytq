import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={[classes.Container, props.className ? props.className : '']
        .join(' ')
        .trim()}
      onClick={props.onClick}
      style={props.style}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};

export default Button;
