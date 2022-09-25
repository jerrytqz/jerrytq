import React from 'react';

import classes from './ProjectHeader.module.css'; 

const ProjectHeader = (props) => (
    <div className={classes.Container}>
        <strong className={classes.Title}>{props.title}</strong>
        <div className={classes.HeaderInfo}>
            <div className={classes.Credits}>{props.credits} |</div>
            <div>{props.date}</div>
        </div>
    </div>
)

export default ProjectHeader;
