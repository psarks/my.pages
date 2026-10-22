import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Section, NavButton, Counter, Img } from './slider.elements'

// Controlled component: the parent owns `current` so the thumbnail grid can change it too
const ImageSlider = ({ slides, current, onChange }) => {
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const length = slides.length;
  const nextSlide = () => onChange(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => onChange(current === 0 ? length - 1 : current - 1);

  return (
    <Section>
      <NavButton $side="left" onClick={prevSlide} aria-label="Previous photo">
        <IoIosArrowBack />
      </NavButton>
      <NavButton $side="right" onClick={nextSlide} aria-label="Next photo">
        <IoIosArrowForward />
      </NavButton>
      {/* key restarts the fade-in animation on every slide change */}
      <Img key={current} src={slides[current].image} alt={`Photograph ${current + 1} of ${length}`} />
      <Counter>{current + 1} / {length}</Counter>
    </Section>
  );
};

export default ImageSlider;
