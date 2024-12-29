import React from 'react';
import classes from './Divider.module.css';

const Divider = (props) => {
  return (
    <hr
      className={[classes.Container, props.className ? props.className : '']
        .join(' ')
        .trim()}
    />
  );
};

export default Divider;
