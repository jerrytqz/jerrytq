import React, { useState } from 'react';

import classes from './Slideshow.module.css'; 

const Slideshow = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <div className={classes.Container}>
            <div className={classes.Top}>
                <span className={classes.ArrowLeft} onClick={() => setSlideIndex(prevIndex => prevIndex-1 < 0 ? props.imageLinks.length-1 : prevIndex-1)}>&#10094;</span>
                <img className={classes.Image} src={props.imageLinks[slideIndex].url} alt={props.imageLinks[slideIndex].alt} draggable={false}/>
                <span className={classes.ArrowRight} onClick={() => setSlideIndex(prevIndex => prevIndex+1 > props.imageLinks.length-1 ? 0 : prevIndex+1)}>&#10095;</span>
            </div>
            <div className={classes.Counter}>
                {props.imageLinks.map((link, index) => <span key={link.alt} style={index === slideIndex ? {backgroundColor: '#393ae7'} : null} className={classes.Dot} onClick={() => setSlideIndex(index)}/>)}
            </div>
        </div>
    );
};

export default Slideshow; 
