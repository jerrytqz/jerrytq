import {
  faCommentDots,
  faHome,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import DropdownItem from './DropdownItem/DropdownItem.js';
import NavigationItem from './NavigationItem/NavigationItem.js';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
  return (
    <ul
      className={props.toolbar ? classes.ContainerToolbar : classes.Container}
    >
      <NavigationItem link="/" end toolbar={props.toolbar} icon={faHome}>
        Home
      </NavigationItem>
      <DropdownItem
        baseLink="/projects"
        name="Projects"
        toolbar={props.toolbar}
        icon={faScrewdriverWrench}
      />
      <NavigationItem
        link="/contact"
        toolbar={props.toolbar}
        icon={faCommentDots}
      >
        Contact
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
