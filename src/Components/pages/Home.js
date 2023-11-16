import React from 'react';
import '../../css/App.css';
import Hero from '../Hero';
import HomeAbout from '../HomeAbout';
import HomeMach24 from '../HomeMach24';
import HomeProjects from '../HomeProjects';

function Home() {
  return (
    <>
 
        <Hero />
        <HomeMach24 />
        <HomeProjects />
        <HomeAbout />
    </>
  );
};

export default Home;