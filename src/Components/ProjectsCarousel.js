import { useState } from 'react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../Images/SOTTR_Wallpaper_1_3840_2160.jpg';
import { gsap} from 'gsap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget.querySelector('.card-title'), {y:"-=80"});
      gsap.to(currentTarget.querySelector('img'), {opacity: 0.4,});
      console.log("i hate js")

    };
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget.querySelector('.card-title'), { y:"+=80"});
      gsap.to(currentTarget.querySelector('img'), {opacity: 1 });

    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div className='containers'>
          <img className="carImg" src={img} alt="Sionna"/>
        </div>
          <Carousel.Caption>
            <div className='card-title'>Sionna</div>
            <div className='lineBreak'></div>
          </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div className='containers'>
          <img className="carImg" src={img} alt="Sionna"/>
        </div>
          <Carousel.Caption>
          <div className='card-title'>Mach24</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div className='containers'>
          <img className="carImg" src={img} alt="Sionna"/>
        </div>
          <Carousel.Caption>
          <div className='card-title'>Rocketry Workshops</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;