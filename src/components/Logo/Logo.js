import React from 'react';
import { Link } from 'react-router-dom';

import { ASSETS_BASE_DIR } from '../../shared/constants';
import classes from './Logo.module.css';

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
