import React from 'react';

import HomeHero from '../../components/HomeHero/HomeHero';
import Overview from '../../components/Overview/Overview';
import Courses from '../../components/Courses/Courses';
import Skills from '../../components/Skills/Skills';
import Experiences from '../../components/Experiences/Experiences';

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
