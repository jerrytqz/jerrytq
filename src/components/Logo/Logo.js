import React from 'react';
import { Link } from 'react-router-dom';

import ASSETS_BASE_URL from '../../shared/assetsBase';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Link to="/" className={classes.Container}>
        <img
          className={classes.Icon}
          src={new URL('icon.png', ASSETS_BASE_URL)}
          alt="Icon"
          draggable={false}
        />
        <strong className={classes.Name}>JerryTQ</strong>
      </Link>
    </div>
  );
};

export default Logo;
