import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem.js'; 

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={process.env.PUBLIC_URL} exact>Home</NavigationItem>
        <NavigationItem link={process.env.PUBLIC_URL+"/projects"}>Projects</NavigationItem>
    </ul>
)

export default NavigationItems; 