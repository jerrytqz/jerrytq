import React from 'react';

import classes from './Overview.module.css';
import OverviewPart from './OverviewPart/OverviewPart';

const OVERVIEW = [
  {
    title: 'About Me',
    body: `I am a 4th-year Software Engineering student at the University of Waterloo. 
        I taught myself to code in middle school with Java and quickly developed a passion for 
        creating software. Since then, I have interned at several companies in various software 
        development roles. In my free time, I enjoy working on programming projects that 
        I have developed over the years. I love learning and I am always open to new opportunities 
        and experiences!`,
  },
];

const Overview = () => {
  return (
    <section className={classes.Container}>
      {OVERVIEW.map((overviewPart) => (
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
