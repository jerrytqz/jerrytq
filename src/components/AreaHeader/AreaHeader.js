import React from 'react';

import classes from './AreaHeader.module.css'; 

const AreaHeader = (props) => (
    <div className={classes.Container}>
        <hr className={classes.Divider} style={{marginLeft: "100px"}}/>
        <div className={classes.SectionTitle}>{props.title}</div>
        <hr className={classes.Divider} style={{marginRight: "100px"}}/>
    </div>
)
    
export default AreaHeader;
