import React from 'react';

import Technology from '../../Technology/Technology';
import classes from './Skill.module.css'; 

const Skill = (props) => {
    return (
        <div className={classes.Container}>
            <Technology imageUrl={props.imageUrl} alt={props.imageAlt} style={{width: '72px', height: '72px'}}/>
            <p className={classes.Name}>{props.name}</p>
        </div>
    );
}

export default Skill; 