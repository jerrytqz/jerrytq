import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js'; 
import DropdownItem from './DropdownItem/DropdownItem.js'; 

const PROJECTS = [
    {name: 'Spin', linkName: 'spin'},
    {name: 'JerryTQ', linkName: 'jerrytq'},
    {name: 'Starship', linkName: 'starship'},
    {name: 'Fortress', linkName: 'fortress'},
    {name: 'Anime Database', linkName: 'anime-database'},
];

const NavigationItems = (props) => {
    return (
        <ul className={props.toolbar ? classes.ContainerToolbar : classes.Container}>
            <NavigationItem link="/" end toolbar={props.toolbar}>Home</NavigationItem>
            <DropdownItem baseLink="/projects" links={PROJECTS} name="Projects" toolbar={props.toolbar}/>
            <NavigationItem link="/contact" toolbar={props.toolbar}>Contact</NavigationItem>
        </ul>
    );
};

export default NavigationItems; 
