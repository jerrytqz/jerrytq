import React from 'react';

import classes from './Experience.module.css';

const Experience = (props) => {
  return (
    <div className={classes.Container}>
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className={classes.Image}
        draggable={false}
      />
      <div className={classes.Info}>
        <div className={classes.InfoRow}>
          <h3 className={classes.Title}>{props.title}</h3>
          <p className={classes.DateRange}>{props.dateRange}</p>
        </div>
        <div className={classes.InfoRow}>
          <p className={classes.Company}>{props.company}</p>
          <p className={classes.Location}>{props.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
