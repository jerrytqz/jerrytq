import React from 'react';

import classes from './Technology.module.css'; 

const Technology = (props) => {
    return (
        <img src={props.imageURL} alt={props.imageAlt} className={classes.Image} draggable={false}/>
    );
}

export default Technology; 