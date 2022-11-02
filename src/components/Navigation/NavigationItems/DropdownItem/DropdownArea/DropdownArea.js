import React from 'react';

import classes from './DropdownArea.module.css';

const DropdownArea = (props) => {
    return (
        <div className={[props.toolbar ? classes.ContainerToolbar : classes.Container, props.show ? classes.Show : ''].join(' ')}>
            {props.children}
        </div>
    );
};

export default DropdownArea; 
