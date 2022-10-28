import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js'; 

const NavigationItems = (props) => {
    let containerClass = classes.Container;
    if (props.toolbar) containerClass = classes.ContainerToolbar;

    return (
        <ul className={containerClass}>
            <NavigationItem link="/" end toolbar={props.toolbar}>Home</NavigationItem>
            <NavigationItem link="/projects" toolbar={props.toolbar}>Projects</NavigationItem>
        </ul>
    );
};

export default NavigationItems; 
