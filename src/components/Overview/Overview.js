import React from 'react';

import OverviewPart from './OverviewPart/OverviewPart';
import classes from './Overview.module.css'; 

const OVERVIEW = [
    {
        title: 'About Me',
        body: `I am currently a Software Engineering student at the University of Waterloo. For as far 
        back as I can remember, I have loved STEM, especially math and physics. In middle school, I came 
        across Java, my first programming language, and immediately discovered a passion for making software 
        as well. Since then, I have taught myself numerous new technologies and worked on several projects 
        in my free time. As a quick and avid learner, I am always open to new opportunities and experiences!`
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
