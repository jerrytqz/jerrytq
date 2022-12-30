import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../../../../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../../../../shared/userInterfaces/errors/FetchError/FetchError';

import classes from './DropdownArea.module.css';

const DropdownArea = (props) => {
    return (
        <div className={[props.toolbar ? classes.ContainerToolbar : classes.Container, props.show ? classes.Show : ''].join(' ')}>
            {props.fetchLoading 
                ? <LoadingSpinner style={{fontSize: props.toolbar ? '9px' : '6px', margin: '26px auto'}}/> 
                : props.fetchError 
                ? props.toolbar ? <FetchError/> : <FetchError containerStyle={{padding: '0'}} titleStyle={{fontSize: '22px'}} descriptionStyle={{fontSize: '16px'}}/> 
                : (props.links.map(
                    link => (
                        <NavLink 
                            key={link.name} 
                            to={`${props.baseLink}/${link.slug}`}
                            className={({ isActive }) => [props.toolbar ? classes.LinkToolbar : classes.Link, isActive ? classes.active : ''].join(' ')}
                        >
                            {link.name}
                        </NavLink>
                    )
                )
            )}
        </div>
    );
};

export default DropdownArea; 
