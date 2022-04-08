import React from 'react';

import classes from './Extracurricular.module.css'; 

const Extracurricular = (props) => (
    <div className={classes.Container}>
        <img className={classes.Image} src={props.image} alt={props.alt}/>
        <div className={classes.Overlay}>
            <div className={classes.Text}>{props.description}</div>
        </div>
        <p className={classes.Title}>{props.title}</p> 
    </div>
)

export default Extracurricular;
