import styled, { keyframes } from 'styled-components';

// Fade each new photo in so changing slides feels smooth
const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

export const Section = styled.div`
    position: relative;
    width: 100%;
    max-width: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Dark rounded frame in the same style as the site's cards
export const Img = styled.img`
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 22px;
    border: 1px solid #2c3554;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45);
    animation: ${fadeIn} 0.6s ease;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

// Round, translucent arrow buttons (real <button>s so they work with the keyboard)
export const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ $side }) => ($side === 'left' ? 'left: 12px;' : 'right: 12px;')}
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #fff;
    background: rgba(16, 21, 34, 0.65);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    border: 1px solid #2c3554;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    transition: background 0.25s ease, border-color 0.25s ease;

    &:hover {
        background: #4b59f7;
        border-color: #4b59f7;
    }
    &:focus-visible {
        outline: 3px solid #c9d1ff;
        outline-offset: 2px;
    }
`;

// Pill badge showing the position, e.g. "3 / 18"
export const Counter = styled.span`
    position: absolute;
    bottom: 14px;
    right: 14px;
    z-index: 10;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 5px 11px;
    border-radius: 999px;
    color: #c9d1ff;
    background: rgba(16, 21, 34, 0.7);
    border: 1px solid #2c3554;
`;
