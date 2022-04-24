import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem.js'; 

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/personal-website" exact>Home</NavigationItem>
        <NavigationItem link="/personal-website/projects">Projects</NavigationItem>
    </ul>
)

export default NavigationItems; 