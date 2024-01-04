import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Logo.module.css';

import { ASSETS_BASE_DIR } from '../../shared/constants';

const Logo = () => (
  <div>
    <Link to="/" className={classes.Container}>
      <img
        className={classes.Icon}
        src={`${ASSETS_BASE_DIR}/icon.png`}
        alt="Icon"
        draggable={false}
      />
      <strong className={classes.Name}>JerryTQ</strong>
    </Link>
  </div>
);

export default Logo;
