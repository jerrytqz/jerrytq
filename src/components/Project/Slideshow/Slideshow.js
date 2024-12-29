import React, { useState } from 'react';

import ZoomImage from '../../../shared/userInterfaces/ZoomImage/ZoomImage';
import classes from './Slideshow.module.css';

const Slideshow = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className={classes.Container}>
      <div className={classes.Top}>
        <button
          className={classes.ArrowLeft}
          onClick={() =>
            setSlideIndex((prevIndex) =>
              prevIndex - 1 < 0 ? props.imageLinks.length - 1 : prevIndex - 1,
            )
          }
          aria-label="Go to previous image"
        >
          &#10094;
        </button>
        <img
          className={classes.Image}
          src={
            props.imageLinks.length > 0 ? props.imageLinks[slideIndex].url : ''
          }
          alt={
            props.imageLinks.length > 0 ? props.imageLinks[slideIndex].alt : ''
          }
          draggable={false}
        />
        <ZoomImage
          className={classes.ZoomImage}
          imageUrl={
            props.imageLinks.length > 0 ? props.imageLinks[slideIndex].url : ''
          }
          imageAlt={
            props.imageLinks.length > 0 ? props.imageLinks[slideIndex].alt : ''
          }
        />
        <button
          className={classes.ArrowRight}
          onClick={() =>
            setSlideIndex((prevIndex) =>
              prevIndex + 1 > props.imageLinks.length - 1 ? 0 : prevIndex + 1,
            )
          }
          aria-label="Go to next image"
        >
          &#10095;
        </button>
      </div>
      <div className={classes.Bottom}>
        {props.imageLinks.map((link, index) => (
          <button
            key={link.alt}
            style={
              index === slideIndex
                ? { backgroundColor: 'var(--color-secondary)' }
                : null
            }
            className={classes.Dot}
            onClick={() => setSlideIndex(index)}
            aria-label={`Go to image number ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
