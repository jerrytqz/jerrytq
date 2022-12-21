import React from 'react';

import OverviewPart from './OverviewPart/OverviewPart';
import classes from './Overview.module.css'; 

const Overview = (props) => {
    return (
        <section className={classes.Container}>
            {props.content.map((overviewPart, index) => (
                <OverviewPart 
                    key={index} 
                    title={overviewPart.title} 
                    body={overviewPart.body} 
                />
            ))}
        </section> 
    )
}

export default Overview;
