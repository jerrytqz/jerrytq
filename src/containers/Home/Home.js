import React, { Component } from 'react';

import HomeHero from '../../components/HomeHero/HomeHero';
import Overview from '../../components/Overview/Overview';
import Courses from '../../components/Courses/Courses';
import Skills from '../../components/Skills/Skills';

class Home extends Component {
  render() {
    return (
      <>
        <HomeHero />
        <Overview />
        <Skills />
        <Courses />
      </>
    );
  }
}

export default Home;
