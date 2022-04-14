import React from 'react';

import classes from './Skill.module.css'; 

const Skills = (props) => {

    return (
        <div className={classes.Skill}>
            <img src={props.image} alt={props.alt} class={classes.Image}/>
            <div class={classes.Name}>{props.name}</div>
        </div>
    )
}

export default Skills; 
