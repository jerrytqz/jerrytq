import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Project.module.css'; 
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import { BACKEND_BASE_DIR } from '../../shared/constants';

const Project = (props) => {
    const { urlName } = useParams();
    const [fetchLoading, setFetchLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const [fetchErrorMsg, setFetchErrorMsg] = useState(null);
    const [project, setProject] = useState({});
    
    useEffect(() => {
        setFetchLoading(true);
        fetch(`${BACKEND_BASE_DIR}/fetch-project/?urlName=${urlName}`, {method: 'GET'})
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
    }, [urlName]);

    return (
        fetchLoading ? (
            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}> 
                <LoadingSpinner/> 
            </div>
        ) : fetchError ? <FetchError description={fetchErrorMsg} homeButton/> : (
            <div/>
        )
    );

}

export default Project;
