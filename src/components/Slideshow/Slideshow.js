import React, { useState }from 'react';

import classes from './Slideshow.module.css'; 

const Slideshow = (props) => {
    const [index, setIndex] = useState(0);
    
    return (
        <div className={classes.Container}>
            <div className={classes.Top}>
                <span className={classes.ArrowLeft} onClick={() => setIndex(prevIndex => prevIndex-1 < 0 ? props.imageLinks.length-1 : prevIndex-1)}>&#10094;</span>
                <img className={classes.Image} src={props.imageLinks[index].url} alt={props.imageLinks[index].alt} draggable={false}/>
                <span className={classes.ArrowRight} onClick={() => setIndex(prevIndex => prevIndex+1 > props.imageLinks.length-1 ? 0 : prevIndex+1)}>&#10095;</span>
            </div>
            <div className={classes.Counter}>
                {props.imageLinks.map((_, curIndex) => <span style={curIndex === index ? {backgroundColor: 'black'} : null} className={classes.Dot} onClick={() => setIndex(curIndex)}/>)}
            </div>
        </div>
    );
}

export default Slideshow; 
