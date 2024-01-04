import React from 'react';

import classes from './Toolbar.module.css'; 
import NavigationItems from '../NavigationItems/NavigationItems'; 
import Logo from '../../Logo/Logo'; 
import Button from '../../../shared/userInterfaces/Button/Button';

const Toolbar = (props) => {
    return (
        <header className={classes.Container}>
            <Logo/>
            <nav className={classes.Min768Block}>
                <NavigationItems toolbar/>
            </nav>
            <Button buttonClass={classes.SidebarButton} onClick={props.onSidebarOpen}>
                <span className={classes.HamburgerLine}/>
                <span className={classes.HamburgerLine}/>
                <span className={classes.HamburgerLine}/>
            </Button>
        </header>
    );
};

export default Toolbar; 
