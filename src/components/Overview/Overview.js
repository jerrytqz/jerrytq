import React from 'react';

import OverviewPart from './OverviewPart/OverviewPart'; 

const Overview = (props) => {
    return (
        <section>
            {props.content.map((overviewPart, index) => (
                <OverviewPart key={index} title={overviewPart.title} body={overviewPart.body} altStyling={index % 2 === 1 ? true : false}/>
            ))}
        </section> 
    )
}

export default Overview;