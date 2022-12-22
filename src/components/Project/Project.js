import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Project.module.css'; 
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import { BACKEND_BASE_DIR } from '../../shared/constants';
import Button from '../../shared/userInterfaces/Button/Button';
import Slideshow from '../Slideshow/Slideshow';

import creditsImage from '../../assets/images/projects/credits.png';
import dateImage from '../../assets/images/projects/date.png';

const Project = () => {
    const { slug } = useParams();
    const [fetchLoading, setFetchLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    const [fetchErrorMsg, setFetchErrorMsg] = useState(null);
    const [project, setProject] = useState({});
    
    useEffect(() => {
        setFetchLoading(true);
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
                        <p className={classes.Credits}>
                            <img src={creditsImage} alt="Credits" className={classes.CreditsImage} draggable={false}/>
                            {project.credits.join(', ')}
                        </p>
                        <p className={classes.StartDate}>
                            <img src={dateImage} alt="Date" className={classes.DateImage} draggable={false}/>
                            {project.startDate}
                        </p>
                    </div>
                </header>
                <hr className={classes.Divider}/>
                <div className={classes.Content}>
                    <Slideshow imageLinks={project.imageLinks}/>
                    <div className={classes.ContentRight}>
                        <p className={classes.Description}>{project.description}</p>
                        {project.projectLinks.WEB ? (
                            <a style={{marginTop: 'auto'}} href={project.projectLinks.WEB} target="_blank" rel="noreferrer">
                                <Button buttonClass={classes.WebsiteButton}>✨ See it live! ✨</Button>
                            </a> 
                        ) : null}
                    </div>
                </div>
                <footer className={classes.Footer}>
                    <p>Ni hao</p>
                </footer>
            </section>
        )
    );
}

export default Project;
