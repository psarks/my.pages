import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {Section, NavLeft, NavRight, Img} from './slider.elements'
import './slider.elements.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Section>
      <NavLeft onClick={prevSlide} />
      <NavRight onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
      
    </Section>
  );
};

export default ImageSlider;