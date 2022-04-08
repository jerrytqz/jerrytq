import React from 'react';

import classes from './SectionHeader.module.css'; 

const SectionHeader = (props) => (
    <div className={classes.Container}>
        <hr className={classes.Divider} style={{marginLeft: "100px"}}/>
        <div className={classes.SectionTitle}>{props.title}</div>
        <hr className={classes.Divider} style={{marginRight: "100px"}}/>
    </div>
)
    
export default SectionHeader;
