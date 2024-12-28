import React from 'react';
import classes from './Sidebar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../shared/userInterfaces/Backdrop/Backdrop';
import Button from '../../../shared/userInterfaces/Button/Button';

const Sidebar = (props) => (
  <>
    <div
      className={[classes.Container, props.show ? classes.Show : '']
        .join(' ')
        .trim()}
    >
      <header className={classes.Header}>
        <Button
          className={classes.SidebarButton}
          onClick={props.onSidebarClose}
          ariaLabel="Close sidebar"
        >
          <span className={classes.HamburgerLine} />
          <span className={classes.HamburgerLine} />
          <span className={classes.HamburgerLine} />
        </Button>
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
