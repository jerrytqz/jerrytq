import React from 'react';

import classes from './OverviewPart.module.css'; 

const OverviewPart = (props) => {
    let altStyling = null; 

    if (props.altStyling) {
        altStyling = {
            backgroundColor: 'lightblue',
            color: 'white'
        }
    }

    return (
        <div className={classes.Container} style={altStyling}>
            <p className={classes.Title} style={{color: "black"}}>{props.title}</p>
            <p className={classes.Body}>{props.body}</p> 
        </div>
    )
}

export default OverviewPart;
