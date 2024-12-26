import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {
  return (
    <NavLink className={classes.Container} to={props.slug}>
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className={classes.Image}
        draggable={false}
      />
      <h3 className={classes.Name}>{props.name}</h3>
      <hr className={classes.Divider} />
      <p className={classes.ShortDescription}>{props.shortDescription}</p>
    </NavLink>
  );
};

export default ProjectCard;
