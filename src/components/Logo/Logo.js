import React from 'react';

import classes from './Logo.module.css';

import {ASSETS_BASE_DIR} from '../../shared/constants';

const Logo = () => (
    <div className={classes.Container}>
        <img src={`${ASSETS_BASE_DIR}/icon.png`} alt="Icon"/>
        <strong className={classes.Name}>JerryTQ</strong>
    </div>
)

export default Logo; 
