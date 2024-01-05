import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.Container}>
      <div className={classes.SocialMediaIcons}>
        <a
          className={classes.SocialMediaIcon}
          href="https://linkedin.com/in/jerrytq"
        >
          <FontAwesomeIcon icon={faLinkedin} inverse />
        </a>
        <a
          className={classes.SocialMediaIcon}
          href="https://github.com/jerrytqz"
        >
          <FontAwesomeIcon icon={faGithub} inverse />
        </a>
        <a
          className={classes.SocialMediaIcon}
          href="https://instagram.com/jerrytqz"
        >
          <FontAwesomeIcon icon={faInstagram} inverse />
        </a>
        <a
          className={classes.SocialMediaIcon}
          href="mailto:contact@jerrytq.com"
        >
          <FontAwesomeIcon icon={faEnvelope} inverse />
        </a>
      </div>
      <p className={classes.CopyrightText}>© 2022 Jerry Zheng</p>
    </footer>
  );
};

export default Footer;
