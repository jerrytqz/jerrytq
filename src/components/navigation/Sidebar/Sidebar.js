import React from 'react';

import Backdrop from '../../../shared/userInterfaces/Backdrop/Backdrop';
import MenuButton from '../../../shared/userInterfaces/buttons/MenuButton/MenuButton';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidebar.module.css';

const Sidebar = (props) => (
  <>
    <div
      className={[classes.Container, props.show ? classes.Show : '']
        .join(' ')
        .trim()}
      inert={props.show ? undefined : ''} // Workaround until upgrade to React 19
    >
      <header className={classes.Header}>
        <MenuButton onClick={props.onSidebarClose} ariaLabel="Close sidebar" />
      </header>
      <nav className={classes.NavItems}>
        <NavigationItems />
      </nav>
      <footer className={classes.Footer}>
        <p>© 2022 Jerry Zheng</p>
      </footer>
    </div>
    <Backdrop show={props.show} onClick={props.onSidebarClose} />
  </>
);

export default Sidebar;
