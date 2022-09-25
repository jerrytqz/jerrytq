import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem.js'; 

const NavigationItems = () => (
    <ul className={classes.Container}>
        <NavigationItem link="/" end>Home</NavigationItem>
        <NavigationItem link="/projects">Projects</NavigationItem>
    </ul>
)

export default NavigationItems; 