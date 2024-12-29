import React from 'react';

import Divider from '../../../shared/userInterfaces/Divider/Divider';
import classes from './OverviewPart.module.css';

const OverviewPart = (props) => {
  return (
    <div className={classes.Container}>
      <header>
        <h2 className={classes.Title}>{props.title}</h2>
        <Divider />
      </header>
      <p className={classes.Body}>{props.body}</p>
    </div>
  );
};

export default OverviewPart;
