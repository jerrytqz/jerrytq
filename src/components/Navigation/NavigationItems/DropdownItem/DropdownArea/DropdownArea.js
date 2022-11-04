import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './DropdownArea.module.css';

const DropdownArea = (props) => {
    return (
        <div className={[props.toolbar ? classes.ContainerToolbar : classes.Container, props.show ? classes.Show : ''].join(' ')}>
            {props.links.map(
                (link, index) => (
                    <NavLink 
                        key={index} 
                        to={`${props.baseLink}/${link.linkName}`}
                        className={({ isActive }) => [props.toolbar ? classes.LinkToolbar : classes.Link, isActive ? classes.active : ''].join(' ')}
                    >
                        {link.name}
                    </NavLink>
                )
            )}
        </div>
    );
};

export default DropdownArea; 
