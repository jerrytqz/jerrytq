import React from 'react';
import { SocialIcon } from 'react-social-icons';

import classes from './Footer.module.css'; 

const Footer = () => {
    return (
        <footer className={classes.Container}>
            <div className={classes.SocialMediaIcons}>
                <SocialIcon className={classes.SocialMediaIcon} bgColor="#14323c" fgColor="white" url="https://linkedin.com/in/jerrytq"/>
                <SocialIcon className={classes.SocialMediaIcon} bgColor="#14323c" fgColor="white" url="https://github.com/jerrytqz"/>
                <SocialIcon className={classes.SocialMediaIcon} bgColor="#14323c" fgColor="white" url="https://instagram.com/jerrytqz"/>
            </div>
            <p className={classes.CopyrightText}>© 2022 Jerry Zheng</p>
        </footer>
    );
};

export default Footer; 
