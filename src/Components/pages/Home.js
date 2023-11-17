import React from 'react';
import '../../css/App.css';
import Hero from '../Hero';
import HomeAbout from '../HomeAbout';
import HomwProjectShowcase from '../HomwProjectShowcase';
import HomeProjects from '../HomeProjects';

function Home() {
  return (
    <>
 
        <Hero />
        <HomwProjectShowcase />
        <HomeProjects />
        <HomeAbout />
    </>
  );
};

export default Home;