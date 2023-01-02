import React, { Component } from 'react'; 

import Hero from '../../components/Hero/Hero'; 
import Overview from '../../components/Overview/Overview';
import Courses from '../../components/Courses/Courses';
import Skills from '../../components/Skills/Skills';

class Home extends Component {
    render() {
        return (
            <>
                <Hero/>
                <Overview/>
                <Skills/>
                <Courses/>
            </>
        );
    }
}

export default Home; 
