import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Button from '../../../shared/userInterfaces/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Toolbar = (props) => {
  return (
    <header className={classes.Container}>
      <Button
        className={classes.SidebarButton}
        onClick={props.onSidebarOpen}
        ariaLabel="Open sidebar"
      >
        <FontAwesomeIcon
          icon={faBars}
          className={classes.BarsIcon}
          fixedWidth
        />
      </Button>
      <Logo />
      <nav className={classes.Min768Block}>
        <NavigationItems toolbar />
      </nav>
    </header>
  );
};

export default Toolbar;
