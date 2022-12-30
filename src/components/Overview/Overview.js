import React from 'react';

import OverviewPart from './OverviewPart/OverviewPart';
import classes from './Overview.module.css'; 

const OVERVIEW = [
    {
        title: 'About Me',
        body: 'I am currently a high school student in Grade 12 at Fraser Heights Secondary School. This fall, I will be studying software engineering at the University of Waterloo. For as far back as I can remember, I have loved STEM, especially math, computer science, and physics. In the future, I plan on working as a software engineer.'
    },
    {
        title: 'Hobbies',
        body: 'Learning more about my favourite subjects has always filled me with joy and excitement, and as such, I can often be found studying math (especially for upcoming math competitions) and science (such as by working on my newest programming project). Otherwise, I am usually playing badminton with my friends, or if it is winter, skiing on a mountain.'
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
    )
}

export default Overview;
