import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem.js'; 

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/projects">Projects</NavigationItem>
        <NavigationItem link="/post-secondary">Post Secondary</NavigationItem>
    </ul>
)

export default NavigationItems; 