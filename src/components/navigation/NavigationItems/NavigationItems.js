import React, { useEffect, useState } from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js'; 
import DropdownItem from './DropdownItem/DropdownItem.js'; 
import { BACKEND_BASE_DIR } from '../../../shared/constants';

const NavigationItems = (props) => {
    const [fetchLoading, setFetchLoading] = useState(false);
    const [projectNames, setProjectNames] = useState([]);
    
    useEffect(() => {
        setFetchLoading(true);
        fetch(`${BACKEND_BASE_DIR}/fetch-project-names`, {
            method: 'GET',
        }).then(res => res.json()).then(res => { 
            setProjectNames(res.projectNames);
            setFetchLoading(false); 
        });
    }, []);

    return (
        <ul className={props.toolbar ? classes.ContainerToolbar : classes.Container}>
            <NavigationItem link="/" end toolbar={props.toolbar}>Home</NavigationItem>
            <DropdownItem baseLink="/projects" links={projectNames} name="Projects" toolbar={props.toolbar} fetchLoading={fetchLoading}/>
            <NavigationItem link="/contact" toolbar={props.toolbar}>Contact</NavigationItem>
        </ul>
    );
};

export default NavigationItems; 
