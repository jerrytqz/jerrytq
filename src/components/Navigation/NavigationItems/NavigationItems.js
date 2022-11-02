import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js'; 
import DropdownItem from './DropdownItem/DropdownItem.js'; 

const NavigationItems = (props) => {
    return (
        <ul className={props.toolbar ? classes.ContainerToolbar : classes.Container}>
            <NavigationItem link="/" end toolbar={props.toolbar}>Home</NavigationItem>
            <DropdownItem baseLink="/projects" name="Projects" toolbar={props.toolbar}>
                Spin
            </DropdownItem>
            <NavigationItem link="/contact" toolbar={props.toolbar}>Contact</NavigationItem>
        </ul>
    );
};

export default NavigationItems; 
