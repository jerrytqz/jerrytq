import React from 'react';
import classes from './Sidebar.module.css'; 

import NavigationItems from '../NavigationItems/NavigationItems'; 
import Backdrop from '../../../shared/UI/Backdrop/Backdrop';

const Sidebar = (props) => (
    <>
        <div className={[props.show ? classes.Show : '', classes.Container].join(' ')}>
            <nav className={classes.NavItems}>
                <NavigationItems/>
            </nav>
        </div>
        <Backdrop show={props.show} onClick={props.onSidebarClose}/>
    </>
);

export default Sidebar; 
