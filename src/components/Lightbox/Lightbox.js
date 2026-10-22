import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DURATION = 450; // ms; keep in sync with the transition below

// Where the clicked thumbnail currently sits on screen
const thumbBox = (el) => {
  const r = el.getBoundingClientRect();
  return { top: r.top, left: r.left, width: r.width, height: r.height };
};

// Largest centred box (90% x 85% of the window) that keeps the photo's own proportions
const fullBox = (el) => {
  const img = el.querySelector('img');
  const w = (img && img.naturalWidth) || 4;
  const h = (img && img.naturalHeight) || 3;
  const scale = Math.min((window.innerWidth * 0.9) / w, (window.innerHeight * 0.85) / h);
  const width = w * scale;
  const height = h * scale;
  return {
    top: (window.innerHeight - height) / 2,
    left: (window.innerWidth - width) / 2,
    width,
    height,
  };
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(8, 11, 20, 0.85);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity ${DURATION - 100}ms ease;
  cursor: zoom-out;
`;

// The photo itself: animates from the thumbnail's box to the centred box, with a springy
// easing (slight overshoot) so it looks like it pops out toward the viewer
const Frame = styled.figure`
  position: fixed;
  z-index: 2001;
  margin: 0;
  overflow: hidden;
  cursor: zoom-out;
  border: 1px solid #2c3554;
  border-radius: ${({ $show }) => ($show ? '22px' : '14px')};
  box-shadow: ${({ $show }) =>
    $show ? '0 40px 90px rgba(0, 0, 0, 0.65), 0 0 0 3px rgba(75, 89, 247, 0.35)' : '0 0 0 rgba(0, 0, 0, 0)'};
  transition: top ${DURATION}ms cubic-bezier(0.34, 1.25, 0.5, 1),
    left ${DURATION}ms cubic-bezier(0.34, 1.25, 0.5, 1),
    width ${DURATION}ms cubic-bezier(0.34, 1.25, 0.5, 1),
    height ${DURATION}ms cubic-bezier(0.34, 1.25, 0.5, 1),
    border-radius ${DURATION}ms ease, box-shadow ${DURATION}ms ease;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Close = styled.button`
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 2002;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 999px;
  color: #c9d1ff;
  background: rgba(16, 21, 34, 0.8);
  border: 1px solid #2c3554;
  cursor: pointer;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity ${DURATION - 100}ms ease, background 0.25s ease;
  &:hover {
    background: #4b59f7;
  }
  &:focus-visible {
    outline: 3px solid #c9d1ff;
    outline-offset: 2px;
  }
`;

// photos: [{ image }], index: which one is open, getThumb(i): the thumbnail button element
const Lightbox = ({ photos, index, getThumb, onChangeIndex, onClose }) => {
  // false = sitting on the thumbnail, true = popped out to the centre
  const [show, setShow] = useState(false);

  // Mount at the thumbnail's position, then (after the first paint) animate out
  useEffect(() => {
    let id2;
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setShow(true));
    });
    return () => {
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
    };
  }, []);

  // Animate back into the thumbnail, then tell the parent to unmount us
  const close = () => {
    setShow(false);
    setTimeout(onClose, DURATION);
  };

  // Esc closes, arrow keys move between photos
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') onChangeIndex((index + 1) % photos.length);
      if (e.key === 'ArrowLeft') onChangeIndex((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Stop the page behind from scrolling while the photo is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const el = getThumb(index);
  if (!el) return null;
  const box = show ? fullBox(el) : thumbBox(el);

  return (
    <>
      <Backdrop $show={show} onClick={close} />
      <Frame
        $show={show}
        role="dialog"
        aria-modal="true"
        aria-label={`Photograph ${index + 1} of ${photos.length}`}
        style={box}
        onClick={close}
      >
        <img src={photos[index].image} alt={`Photograph ${index + 1} of ${photos.length}`} />
      </Frame>
      <Close $show={show} onClick={close} autoFocus>Close ✕</Close>
    </>
  );
};

export default Lightbox;
