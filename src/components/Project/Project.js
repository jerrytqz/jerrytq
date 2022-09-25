import React from 'react';

import classes from './Project.module.css'; 
import ProjectHeader from './ProjectHeader/ProjectHeader'; 

const Project = (props) => (
    <>
        <ProjectHeader title={props.title} date={props.date} credits={props.credits}/>
        <div className={classes.Container}>
            <img className={classes.Image} src={props.image} alt="Project"/>
            <div className={classes.Text}>
                <div className={classes.DescriptionHeader}>Description</div>
                {props.description}
                <div className={classes.LinksHeader}>Links</div>
                <a href={props.linkA} target="blank" rel="noreferrer" className={classes.Link}>{props.linkAName}</a>
                <a href={props.linkB} target="blank" rel="noreferrer" className={classes.Link}>{props.linkBName}</a>
                <a href={props.linkC} target="blank" rel="noreferrer" className={classes.Link}>{props.linkCName}</a>
                <a href={props.linkD} target="blank" rel="noreferrer" className={classes.Link}>{props.linkDName}</a>
            </div>
        </div>
    </>
)

export default Project;
