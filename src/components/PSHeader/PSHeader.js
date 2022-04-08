import React from 'react';

import classes from './PSHeader.module.css'; 

const PSHeader = (props) => (
        <div className={classes.Container}>
            <img src={props.image} alt="University Logo" className={classes.Image}/>
            <div className={classes.Title}>{props.title}</div>
        </div>
)

export default PSHeader;
 