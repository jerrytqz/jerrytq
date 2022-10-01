import React from 'react';

import classes from './ProjectHeader.module.css'; 

const ProjectHeader = (props) => (
    <div className={classes.Container}>
        <strong className={classes.Name}>{props.name}</strong>
        <div className={classes.HeaderInfo}>
            <div className={classes.Credits}>{props.credits.join(' & ')} |</div>
            <div>{`${props.date.start} - ${props.date.end}`}</div>
        </div>
    </div>
)

export default ProjectHeader;
