import React from 'react';

import OverviewPart from './OverviewPart/OverviewPart';
import classes from './Overview.module.css'; 

const OVERVIEW = [
    {
        title: 'About Me',
        body: `I am currently a Software Engineering student at the University of Waterloo. 
        I taught myself to code in middle school with Java and quickly developed a passion for 
        writing software. Since then, I have picked up numerous new technologies, almost all through 
        self-education. In my free time, I enjoy working on various programming projects that I have 
        developed over the years. I love learning and am always open to opportunities and experiences!`
    }
]

const Overview = () => {
    return (
        <section className={classes.Container}>
            {OVERVIEW.map(overviewPart => (
                <OverviewPart 
                    key={overviewPart.title} 
                    title={overviewPart.title} 
                    body={overviewPart.body} 
                />
            ))}
        </section> 
    );
};

export default Overview;
