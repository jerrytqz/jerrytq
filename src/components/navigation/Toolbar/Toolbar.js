import React from 'react';

import MenuButton from '../../../shared/userInterfaces/buttons/MenuButton/MenuButton';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
  return (
    <header className={classes.Container}>
      <MenuButton
        className={classes.Min768None}
        onClick={props.onSidebarOpen}
        ariaLabel="Open sidebar"
      />
      <Logo />
      <nav className={classes.Min768Block}>
        <NavigationItems toolbar />
      </nav>
    </header>
  );
};

export default Toolbar;
