import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Backdrop from '../../../shared/userInterfaces/Backdrop/Backdrop';
import Button from '../../../shared/userInterfaces/Button/Button';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidebar.module.css';

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
          <FontAwesomeIcon
            icon={faBars}
            className={classes.BarsIcon}
            fixedWidth
          />
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
