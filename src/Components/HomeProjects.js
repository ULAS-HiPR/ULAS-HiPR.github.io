import React from 'react';
import '../css/App.css';
import '../css/Projects.css';
import ControlledCarousel from './ProjectsCarousel';

const HomeProjects = () => {
  return (
    <>
        <div className='content'>
        <div class='small-title'>What else are we working on?</div>
        <ControlledCarousel />
        </div>
    </>
  );
};

export default HomeProjects;