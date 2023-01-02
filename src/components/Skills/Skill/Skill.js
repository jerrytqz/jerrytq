import React from 'react';

import Technology from '../../Technology/Technology';
import classes from './Skill.module.css'; 

const Skill = (props) => {
    return (
        <div className={classes.Container}>
            <Technology imageUrl={props.imageUrl} alt={props.imageAlt}/>
            <div className={classes.Info}>
                <p className={classes.Name}>{props.name}</p>
                <p className={classes.Proficiency}>{props.proficiency}</p>
            </div>
        </div>
    );
}

export default Skill; 
