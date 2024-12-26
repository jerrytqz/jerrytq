import React, { useState } from 'react';
import ZoomImage from '../../../shared/userInterfaces/ZoomImage/ZoomImage';

import classes from './Slideshow.module.css';

const Slideshow = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className={classes.Container}>
      <div className={classes.Top}>
        <span
          className={classes.ArrowLeft}
          onClick={() =>
            setSlideIndex((prevIndex) =>
              prevIndex - 1 < 0 ? props.imageLinks.length - 1 : prevIndex - 1
            )
          }
        >
          &#10094;
        </span>
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
          image={
            props.imageLinks.length > 0 ? props.imageLinks[slideIndex].url : ''
          }
        />
        <span
          className={classes.ArrowRight}
          onClick={() =>
            setSlideIndex((prevIndex) =>
              prevIndex + 1 > props.imageLinks.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          &#10095;
        </span>
      </div>
      <div className={classes.Bottom}>
        {props.imageLinks.map((link, index) => (
          <span
            key={link.alt}
            style={
              index === slideIndex
                ? { backgroundColor: 'var(--color-secondary)' }
                : null
            }
            className={classes.Dot}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
