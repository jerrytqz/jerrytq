import React from 'react';

import classes from './Project.module.css'; 
import ProjectHeader from './ProjectHeader/ProjectHeader'; 

const Project = (props) => (
    <>
        <ProjectHeader title={props.title} date={props.date} credits={props.credits}/>
        <div className={classes.Container}>
            <img className={classes.Image} src={props.images[0]} alt="Project"/>
            <div className={classes.Text}>
                <div className={classes.DescriptionHeader}>Description</div>
                {props.description}
                <div className={classes.LinksHeader}>Links</div>
                {props.links.map(
                    (link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="blank"
                            rel="noreferrer"
                            className={classes.Link}
                        >
                            {link.name}
                        </a>
                    )
                )}
            </div>
        </div>
    </>
)

export default Project;
