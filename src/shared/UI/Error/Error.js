import React from 'react';
import classes from './Error.module.css';

const Error = () => (
    <div className={classes.Container}>
        <h2 className={classes.ErrorTitle}>
            Aw, Snap!
        </h2>
        <p className={classes.ErrorDescription}>
            Something went wrong! Please try refreshing.
        </p>
    </div>
);

export default Error; 
