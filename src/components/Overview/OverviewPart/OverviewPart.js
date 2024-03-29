import React from 'react';

import classes from './OverviewPart.module.css';

const OverviewPart = (props) => {
  return (
    <div className={classes.Container}>
      <header>
        <h2 className={classes.Title}>{props.title}</h2>
        <hr />
      </header>
      <p className={classes.Body}>{props.body}</p>
    </div>
  );
};

export default OverviewPart;
