import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Button from '../../../shared/userInterfaces/Button/Button';

const Toolbar = (props) => {
  return (
    <header className={classes.Container}>
      <Button
        className={classes.SidebarButton}
        onClick={props.onSidebarOpen}
        ariaLabel="Open sidebar"
      >
        <span className={classes.HamburgerLine} />
        <span className={classes.HamburgerLine} />
        <span className={classes.HamburgerLine} />
      </Button>
      <Logo />
      <nav className={classes.Min768Block}>
        <NavigationItems toolbar />
      </nav>
    </header>
  );
};

export default Toolbar;
