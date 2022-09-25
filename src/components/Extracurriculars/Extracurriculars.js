import React from 'react';

import classes from './Extracurriculars.module.css'; 
import Extracurricular from './Extracurricular/Extracurricular'; 
import AreaHeader from '../AreaHeader/AreaHeader'; 

const Extracurriculars = (props) => {
    return (
        <div className={classes.Container}>
            <AreaHeader title="Extracurriculars"/>
            <section className={classes.Extracurriculars}>
                {props.content.map((extracurricular, index) => (
                    <Extracurricular 
                        key={index} 
                        image={extracurricular.image} 
                        alt={extracurricular.name} 
                        name={extracurricular.name}
                        description={extracurricular.description}
                    />
                ))}   
            </section> 
        </div>
    )
}

export default Extracurriculars;
