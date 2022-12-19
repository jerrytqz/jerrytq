import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../../../../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';

import classes from './DropdownArea.module.css';

const DropdownArea = (props) => {
    return (
        <div className={[props.toolbar ? classes.ContainerToolbar : classes.Container, props.show ? classes.Show : ''].join(' ')}>
            {props.fetchLoading ? <LoadingSpinner style={{fontSize: '9px', margin: '26px'}}/> : props.links.map(
                (link, index) => (
                    <NavLink 
                        key={index} 
                        to={`${props.baseLink}/${link.urlName}`}
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
