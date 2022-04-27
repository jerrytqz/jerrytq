import React from 'react';

import OverviewSection from './OverviewSection/OverviewSection'; 

const Overview = () => {
    const titleA = "About Me"; 
    const bodyA = 
        `I am currently a high school student in Grade 12 at Fraser Heights Secondary School. This 
        fall, I will be studying software engineering at the University of Waterloo. For as far back 
        as I can remember, I have loved STEM, especially math, computer science, and 
        physics. In the future, I plan on working as a software engineer.`;

    const titleB = "Hobbies"; 
    const bodyB = 
        `Learning more about my favourite subjects has always filled me with joy and excitement, 
        and as such, I can often be found studying math (especially for upcoming math competitions) 
        and science (such as by working on my newest programming project). Otherwise, I'm usually 
        playing badminton with my friends, or if it's winter, skiing on a mountain.`;

    return (
        <section>
            <OverviewSection title={titleA} body={bodyA}/>
            <OverviewSection title={titleB} body={bodyB} altStyling/>
        </section> 
    )
}

export default Overview;