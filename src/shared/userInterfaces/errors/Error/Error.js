import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../buttons/Button/Button';
import classes from './Error.module.css';

const Error = (props) => {
  const history = useNavigate();

  return (
    <div className={classes.Container} style={props.containerStyle}>
      <h2 className={classes.Title} style={props.titleStyle}>
        {props.title}
      </h2>
      <p className={classes.Description} style={props.descriptionStyle}>
        {props.description}
      </p>
      {props.homeButton ? (
        <Button onClick={() => history('/')} className={classes.HomeButton}>
          🏠 Home
        </Button>
      ) : null}
    </div>
  );
};

export default Error;
