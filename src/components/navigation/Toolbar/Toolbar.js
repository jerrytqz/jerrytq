import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Button from '../../../shared/userInterfaces/Button/Button';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

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
