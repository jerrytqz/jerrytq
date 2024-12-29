import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Button from '../Button/Button';
import classes from './MenuButton.module.css';

const MenuButton = (props) => {
  return (
    <Button
      className={classes.SidebarButton}
      onClick={props.onClick}
      ariaLabel={props.ariaLabel}
    >
      <FontAwesomeIcon icon={faBars} className={classes.BarsIcon} fixedWidth />
    </Button>
  );
};

export default MenuButton;
