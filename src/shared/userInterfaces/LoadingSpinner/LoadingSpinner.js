import React from 'react';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = (props) => {
  return (
    <div
      style={props.style}
      className={[
        classes.LoadingSpinner,
        props.className ? props.className : '',
      ].join(' ')}
    />
  );
};

export default LoadingSpinner;
