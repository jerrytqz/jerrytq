import React from 'react';
import { NavLink } from 'react-router-dom'; 

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    let containerClass = classes.Container;
    if (props.toolbar) containerClass = classes.ContainerToolbar;

    return (
        <li className={containerClass}>
            <NavLink 
                to={props.link}
                end={props.end}
                className={({ isActive }) => isActive ? classes.active : ""}
            >
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavigationItem; 
