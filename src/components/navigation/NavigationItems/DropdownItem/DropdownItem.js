import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; 

import classes from './DropdownItem.module.css';
import DropdownArea from './DropdownArea/DropdownArea';

const DropdownItem = (props) => {
    const dropdownItem = useRef(null);
    const location = useLocation();
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (showDropdown) {
            const mouseDownHandler = (event) => {
                if (dropdownItem.current && !dropdownItem.current.contains(event.target) && event.target.tagName !== 'A') {
                    setShowDropdown(false);
                }
            }

            document.body.addEventListener('mousedown', mouseDownHandler);
    
            return () => {
                document.body.removeEventListener('mousedown', mouseDownHandler);
            };
        }
    }, [showDropdown]);

    useEffect(() => {
        setShowDropdown(false);
    }, [location]);

    return (
        <li ref={dropdownItem} className={props.toolbar ? classes.ContainerToolbar : classes.Container}>
            <div
                className={[
                    props.toolbar ? classes.ButtonToolbar : classes.Button, 
                    showDropdown ? classes.clicked : '',
                    location.pathname.startsWith(props.baseLink) ? classes.active : ''
                ].join(' ')}
                onClick={() => setShowDropdown(prev => !prev)}
            >
                {props.name}
                {showDropdown ? <span className={classes.ArrowUp}/> : <span className={classes.ArrowDown}/>}
            </div>
            <DropdownArea 
                baseLink={props.baseLink} 
                links={props.links} 
                show={showDropdown} 
                toolbar={props.toolbar} 
                fetchLoading={props.fetchLoading} 
                fetchError={props.fetchError}
            />
        </li>
    );
};

export default DropdownItem; 
