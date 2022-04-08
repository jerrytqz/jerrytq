import React from 'react';

import classes from './Project.module.css'; 
import ProjectHeader from './ProjectHeader/ProjectHeader'; 

import Communication from '../../assets/Projects/CoreCompetencies/Communication.jpeg';
import Thinking from '../../assets/Projects/CoreCompetencies/Thinking.jpeg';
import PersonalSocial from '../../assets/Projects/CoreCompetencies/PersonalSocial.jpeg';

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
                <div className={classes.CoreCompetencies}>
                    <div className={classes.TextHeader}>Core Competencies</div>
                    <div className={classes.CCContainer}>
                        <div className={classes.SubContainer}>
                            {props.communication 
                                ? <img src={Communication} className={classes.CoreCompetency} alt="Core Competency"/> 
                                : <img src={Communication} className={classes.CoreCompetency} alt="Core Competency" style={{opacity: "0.15"}}/> 
                            }
                            <div>{props.communication}</div>
                        </div>
                        <div className={classes.SubContainer}>
                            {props.thinking 
                                ? <img src={Thinking} className={classes.CoreCompetency} alt="Core Competency"/> 
                                : <img src={Thinking} className={classes.CoreCompetency} alt="Core Competency" style={{opacity: "0.15"}}/> 
                            }
                            <div>{props.thinking}</div>
                        </div>
                        <div className={classes.SubContainer}>
                            {props.personalSocial 
                                ? <img src={PersonalSocial} className={classes.CoreCompetency} alt="Core Competency"/> 
                                : <img src={PersonalSocial} className={classes.CoreCompetency} alt="Core Competency" style={{opacity: "0.15"}}/> 
                            }
                            <div>{props.personalSocial}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Project;
