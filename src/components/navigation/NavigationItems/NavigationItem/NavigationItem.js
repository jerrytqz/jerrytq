import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
  return (
    <li
      className={props.toolbar ? classes.ContainerToolbar : classes.Container}
    >
      <NavLink
        to={props.link}
        end={props.end}
        className={({ isActive }) =>
          [
            props.toolbar ? classes.LinkToolbar : classes.Link,
            isActive ? classes.active : '',
          ].join(' ')
        }
      >
        {!props.toolbar ? (
          <FontAwesomeIcon
            icon={props.icon}
            className={classes.Icon}
            fixedWidth
          />
        ) : null}
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
