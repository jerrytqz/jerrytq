import React, { useState } from 'react';
import ZoomImage from '../../../shared/userInterfaces/ZoomImage/ZoomImage';

import classes from './Slideshow.module.css';
import Button from '../../../shared/userInterfaces/Button/Button';

const Slideshow = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className={classes.Container}>
      <div className={classes.Top}>
        <Button
          className={classes.ArrowLeft}
          onClick={() =>
            setSlideIndex((prevIndex) =>
              prevIndex - 1 < 0 ? props.imageLinks.length - 1 : prevIndex - 1
            )
          }
          ariaLabel="Go back"
        >
          &#10094;
        </Button>
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
        <Button
          className={classes.ArrowRight}
          onClick={() =>
            setSlideIndex((prevIndex) =>
              prevIndex + 1 > props.imageLinks.length - 1 ? 0 : prevIndex + 1
            )
          }
          ariaLabel="Go forward"
        >
          &#10095;
        </Button>
      </div>
      <div className={classes.Bottom}>
        {props.imageLinks.map((link, index) => (
          <Button
            key={link.alt}
            style={
              index === slideIndex
                ? { backgroundColor: 'var(--color-secondary)' }
                : null
            }
            className={classes.Dot}
            onClick={() => setSlideIndex(index)}
            ariaLabel={`Go to image number ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
