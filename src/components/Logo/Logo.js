import React from 'react';

import classes from './Logo.module.css';
import logoImg from '../../assets/Icon.jpeg'; 

const Logo = () => (
    <div className={classes.Logo}>
        <img src={logoImg} alt="Jerry Zheng"/>
        <strong className={classes.Name}>Jerry Zheng</strong>
    </div>
)

export default Logo; 
