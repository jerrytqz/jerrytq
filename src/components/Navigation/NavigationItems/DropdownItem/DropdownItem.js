import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 

import classes from './DropdownItem.module.css';
import DropdownArea from './DropdownArea/DropdownArea';

const DropdownItem = (props) => {
    const location = useLocation();
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        setShowDropdown(false);
    }, [location]);

    const clickDropdownHandler = useCallback(() => {
        setShowDropdown(prev => !prev);
    }, []);

    return (
        <li className={props.toolbar ? classes.ContainerToolbar : classes.Container}>
            <div
                className={[props.toolbar ? classes.ButtonToolbar : classes.Button, location.pathname.startsWith(props.baseLink) ? classes.active : ''].join(' ')}
                onClick={clickDropdownHandler}
            >
                {props.name}
                {showDropdown ? <span className={classes.ArrowUp}/> : <span className={classes.ArrowDown}/>}
            </div>
            <DropdownArea baseLink={props.baseLink} show={showDropdown} toolbar={props.toolbar}>
                {props.children}
            </DropdownArea>
        </li>
    );
};

export default DropdownItem; 
