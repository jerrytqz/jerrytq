import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import classes from './Project.module.css'; 
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import { BACKEND_BASE_DIR } from '../../shared/constants';
import Button from '../../shared/userInterfaces/Button/Button';

const Project = () => {
    const { slug } = useParams();
    const [fetchLoading, setFetchLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    const [fetchErrorMsg, setFetchErrorMsg] = useState(null);
    const [project, setProject] = useState({});
    
    useEffect(() => {
        fetch(`${BACKEND_BASE_DIR}/fetch-project/?slug=${slug}`, {method: 'GET'})
            .then(response => {
                if (!response.ok) return response.json().then(result => { 
                    if (response.status === 404) setFetchErrorMsg(result.error); 
                    throw new Error(result.error); 
                });
                else return response.json();
            })
            .then(result => {
                setProject(result.project);
                setFetchLoading(false);
            }).catch(() => {
                setFetchError(true);
                setFetchLoading(false);
            });
    }, [slug]);

    return (
        fetchLoading ? (
            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}> 
                <LoadingSpinner style={{fontSize: '11px'}}/> 
            </div>
        ) : fetchError ? <FetchError description={fetchErrorMsg} homeButton/> : (
            <section className={classes.Container}>
                <header className={classes.Header}>
                    <h2 className={classes.Name}>{project.name}</h2>
                    <div className={classes.HeaderRight}>
                        <p className={classes.StartDate}>📅{project.startDate}</p>
                        <p className={classes.Credits}>👤{project.credits}</p>
                    </div>
                </header>
                <hr className={classes.Divider}/>
                <div className={classes.Content}>
                    <img src={project.imageLinks[0].url} alt={project.imageLinks[0].alt} className={classes.Image} draggable={false}/>
                    <div className={classes.ContentRight}>
                        <p className={classes.Description}>{project.description}</p>
                        {project.projectLinks.WEB ? (
                            <a style={{marginTop: 'auto'}} href={project.projectLinks.WEB} target="_blank" rel="noreferrer">
                                <Button buttonClass={classes.WebsiteButton}>✨ See it live! ✨</Button>
                            </a> 
                        ) : null}
                    </div>
                </div>
            </section>
        )
    );
}

export default Project;
