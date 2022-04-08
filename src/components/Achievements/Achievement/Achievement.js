import React from 'react';

import classes from './Achievement.module.css'; 

const Achievement = (props) => {
    return (
        <div className={classes.Container}>
            <img className={classes.Image} src={props.image} alt={props.alt}/>
            <div className={classes.Description}>{props.description}</div>
        </div>
    )
}

export default Achievement;
