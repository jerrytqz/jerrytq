import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.Container}>
      <div className={classes.SocialMediaIcons}>
        <a
          className={classes.SocialMediaIcon}
          href="https://linkedin.com/in/jerrytq"
          aria-label="LinkedIn profile"
        >
          <FontAwesomeIcon icon={faLinkedin} fixedWidth />
        </a>
        <a
          className={classes.SocialMediaIcon}
          href="https://github.com/jerrytqz"
          aria-label="GitHub profile"
        >
          <FontAwesomeIcon icon={faGithub} fixedWidth />
        </a>
        <a
          className={classes.SocialMediaIcon}
          href="https://instagram.com/jerrytqz"
          aria-label="Instagram profile"
        >
          <FontAwesomeIcon icon={faInstagram} fixedWidth />
        </a>
        <a
          className={classes.SocialMediaIcon}
          href="mailto:contact@jerrytq.com"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} fixedWidth />
        </a>
      </div>
      <p className={classes.CopyrightText}>© 2022 Jerry Zheng</p>
    </footer>
  );
};

export default Footer;
