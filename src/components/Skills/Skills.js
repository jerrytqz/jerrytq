import React from 'react';

import classes from './Skills.module.css'; 
import SectionHeader from '../SectionHeader/SectionHeader'; 
import Skill from './Skill/Skill'; 

import cpp from '../../assets/Skills/C++.jpeg'; 
import javascript from '../../assets/Skills/JavaScript.jpeg'; 
import css from '../../assets/Skills/CSS.jpeg'; 
import html from '../../assets/Skills/HTML.jpeg'; 
import python from '../../assets/Skills/Python.jpeg'; 
import java from '../../assets/Skills/Java.jpeg'; 

const Skills = () => {

    return (
        <div className={classes.Container}>
            <SectionHeader title="Skills"/>
            <div className={classes.Skills}>
                <Skill image={cpp} alt="C++" name="C++"/>
                <Skill image={javascript} alt="Javascript" name="Javascript"/>
                <Skill image={css} alt="CSS" name="CSS"/>
                <Skill image={html} alt="HTML" name="HTML"/>
                <Skill image={python} alt="Python" name="Python"/>
                <Skill image={java} alt="Java" name="Java"/>
            </div>
        </div>
    )
}

export default Skills; 
