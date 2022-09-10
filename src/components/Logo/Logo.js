import React from 'react';

import classes from './Logo.module.css';
import logoImg from '../../assets/Icon.jpeg'; 

const Logo = () => (
    <div className={classes.Logo}>
        <img src={logoImg} alt="Logo"/>
        <strong className={classes.Name}>JerryTQ</strong>
    </div>
)

export default Logo; 
