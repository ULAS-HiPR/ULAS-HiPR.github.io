import React from 'react';
import '../css/App.css';
import '../css/Hero.css';

const Hero = () => {
  return (
    <>
        <div class='hero'>
          <div className='fade-img'> </div>
          <div class='content'>
            <div className='hero-title'>We are <b>HiPR</b></div>
            <div className='sub-title'>A rocketry team from the Univsertiy of Limerick</div>
          </div>
         
        </div>
    </>
  );
};

export default Hero;