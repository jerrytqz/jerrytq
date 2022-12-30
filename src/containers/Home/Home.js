import React, { Component } from 'react'; 

import Hero from '../../components/Hero/Hero'; 
import Overview from '../../components/Overview/Overview';
import Courses from '../../components/Courses/Courses';

class Home extends Component {
    render() {
        return (
            <>
                <Hero/>
                <Overview/>
                <Courses/>
            </>
        )
    }
}

export default Home; 
