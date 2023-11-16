import { useState } from 'react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../Images/SOTTR_Wallpaper_1_3840_2160.jpg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
          className="d-block carImg"
          src={img}
          alt="Second slide"
        />
          <Carousel.Caption>
            <h3 className='project-name'>Sionna</h3>
            <p className='extraInfo'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block carImg"
          src={img}
          alt="Second slide"
        />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block carImg"
          src={img}
          alt="Second slide"
        />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;