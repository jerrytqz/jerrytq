import React from 'react';

import OverviewSection from './OverviewSection/OverviewSection'; 

const Overview = () => {
    const titleA = "About Me"; 
    const bodyA = 
        `I am currently a high school student in Grade 12 at Fraser Heights Secondary School. For as far back as I can remember,
        I have loved math and science, especially computer science and physics. I am highly interested in STEM and plan on working
        in the field down the road.`;

    const titleB = "Hobbies"; 
    const bodyB = 
        `Learning more about my favourite subjects has always filled me with joy and excitement, and as such, I can often be found
        studying math (especially for upcoming math competitions) and science (such as by working on my newest coding project). 
        Otherwise, I'm usually playing badminton with my friends, or if it's winter, skiing on a mountain.`;

    return (
        <section>
            <OverviewSection title={titleA} body={bodyA}/>
            <OverviewSection title={titleB} body={bodyB} altStyling/>
        </section> 
    )
}

export default Overview;