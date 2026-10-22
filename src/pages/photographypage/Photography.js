import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { homeObjThree } from './Data';
import { InfoPhoto } from '../../components';
import { SliderData } from '../../components/ImageSlider/SliderData';
import { Container } from '../../globalStyles';
import { Eyebrow } from '../../components/ui';
import Lightbox from '../../components/Lightbox/Lightbox';

const Section = styled.section`
  background: #101522;
  color: #fff;
  padding: 0 0 110px;
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 28px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

// Responsive grid: as many ~160px thumbnails per row as fit
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 14px;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Each thumbnail is a button so it works with the keyboard; the one that is popped out
// is hidden so it looks like the photo lifts off the grid
const Thumb = styled.button`
  padding: 0;
  cursor: pointer;
  background: #1c2237;
  border: 2px solid #2c3554;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 1;
  visibility: ${({ $lifted }) => ($lifted ? 'hidden' : 'visible')};
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #4b59f7;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
  }
  &:focus-visible {
    outline: 3px solid #c9d1ff;
    outline-offset: 2px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Photography = () => {
    // slider position (the slider is controlled from here)
    const [current, setCurrent] = useState(0);
    // index of the thumbnail that is popped out, or null when none is
    const [openIndex, setOpenIndex] = useState(null);
    // refs to every thumbnail button so the lightbox can start from its exact position
    const thumbs = useRef([]);

    return (
        <>
        <InfoPhoto {...homeObjThree} current={current} onChange={setCurrent}/>

        <Section>
            <Container>
                <Eyebrow>Gallery</Eyebrow>
                <Heading>All photos</Heading>
                <Grid>
                    {SliderData.map((slide, index) => (
                        <Thumb
                            key={index}
                            ref={(el) => { thumbs.current[index] = el; }}
                            $lifted={index === openIndex}
                            onClick={() => setOpenIndex(index)}
                            aria-label={`Open photograph ${index + 1}`}
                        >
                            <img src={slide.image} alt="" loading="lazy" />
                        </Thumb>
                    ))}
                </Grid>
            </Container>
        </Section>

        {/* Pops the clicked photo out of the grid to the front */}
        {openIndex !== null && (
            <Lightbox
                photos={SliderData}
                index={openIndex}
                getThumb={(i) => thumbs.current[i]}
                onChangeIndex={setOpenIndex}
                onClose={() => setOpenIndex(null)}
            />
        )}
        </>
    )
}


export default Photography;
