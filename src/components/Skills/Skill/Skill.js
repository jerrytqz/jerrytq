import React from 'react';

import classes from './Skill.module.css'; 

const Skills = (props) => {

    return (
        <div className={classes.Skill}>
            <img src={props.image} alt={props.alt} className={classes.Image}/>
            <div className={classes.Name}>{props.name}</div>
        </div>
    )
}

export default Skills; 
