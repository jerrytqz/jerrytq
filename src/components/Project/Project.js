import React from 'react';

import classes from './Project.module.css'; 
import ProjectHeader from './ProjectHeader/ProjectHeader'; 

const Project = (props) => (
    <div>
        <ProjectHeader title={props.title} date={props.date} credits={props.credits}/>
        <div className={classes.Container}>
            <img className={classes.Image} src={props.image} alt="Project"/>
            <div className={classes.Text}>
                <div className={classes.Description}>
                    <div className={classes.TextHeader}>Description</div>
                    {props.description}
                    <a href={props.linkA} target="blank" rel="noreferrer" style={{marginTop: "20px"}}>{props.linkAName}</a>
                    <a href={props.linkB} target="blank" rel="noreferrer">{props.linkBName}</a>
                </div> 
            </div>
        </div>
    </div>
)

export default Project;
