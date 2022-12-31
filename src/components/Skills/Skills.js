import React from 'react';
import MultiArea from '../../shared/userInterfaces/MultiArea/MultiArea';

import classes from './Skills.module.css'; 

const Skills = () => {
    return (
        <section className={classes.Container}>
            <header className={classes.Header}>
                <h2 className={classes.Title}>Skills</h2>
                <hr/>
            </header>
            <MultiArea containerClass={classes.MultiArea} areas={[
                {title: 'Languages', body: <></>},
                {title: 'Frameworks', body: <></>},
                {title: 'Libraries', body: <></>},
                {title: 'Tools', body: <></>},
                {title: 'Platforms', body: <></>},
            ]}/>
        </section>

    );
}

export default Skills; 