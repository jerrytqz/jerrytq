import React from 'react';

import Courses from '../../components/Courses/Courses';
import Experiences from '../../components/Experiences/Experiences';
import HomeHero from '../../components/HomeHero/HomeHero';
import Overview from '../../components/Overview/Overview';
import Skills from '../../components/Skills/Skills';

const Home = () => {
  return (
    <>
      <HomeHero />
      <Overview />
      <Experiences />
      <Skills />
      <Courses />
    </>
  );
};

export default Home;
