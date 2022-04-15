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
import react from '../../assets/Skills/React.jpeg'; 
import redux from '../../assets/Skills/Redux.jpeg'; 
import django from '../../assets/Skills/Django.jpeg'; 
import git from '../../assets/Skills/Git.jpeg'; 
import bash from '../../assets/Skills/Bash.jpeg'; 

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
                <Skill image={react} alt="React" name="React"/>
                <Skill image={redux} alt="Redux" name="Redux"/>
                <Skill image={django} alt="Django" name="Django"/>
                <Skill image={git} alt="Git" name="Git"/>
                <Skill image={bash} alt="Bash" name="Bash"/>
            </div>
        </div>
    )
}

export default Skills; 
