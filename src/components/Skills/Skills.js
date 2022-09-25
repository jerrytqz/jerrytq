import React from 'react';

import classes from './Skills.module.css'; 
import AreaHeader from '../AreaHeader/AreaHeader'; 
import Skill from './Skill/Skill'; 

const Skills = (props) => {
    return (
        <div className={classes.Container}>
            <AreaHeader title="Skills"/>
            <div className={classes.Skills}>
                {props.content.map((skill, index) => (
                    <Skill key={index} image={skill.image} alt={skill.name} name={skill.name}/>
                ))}
            </div>
        </div>
    )
}

export default Skills; 
