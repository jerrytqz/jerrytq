import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Error.module.css';

import Button from '../../Button/Button';


const Error = (props) => {
    const history = useNavigate();

    const clickHomeHandler = () => {
        history('/');
    };
    
    return (
        <div className={classes.Container}>
            <h2 className={classes.Title}>{props.title}</h2>
            <p className={classes.Description}>{props.description}</p>
            <Button onClick={clickHomeHandler} buttonClass={classes.Button}>🏠 Home</Button>
        </div>
    );
};

export default Error; 
