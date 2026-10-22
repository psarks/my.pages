import styled, { keyframes } from 'styled-components';

export const InfoSec = styled.div`
    color: #fff;
    padding: 170px 0 96px;
    /* keeps the photo's glow from causing sideways scroll on narrow screens */
    overflow: hidden;

    @media screen and (max-width: 1200px) {
        padding: 60px 0 80px;
    }
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
    `;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 48px;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')
};

    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        flex-wrap: nowrap;
    }
`;

export const InfoColumn = styled.div`
   
    padding-right: 15px;
    padding-left: 15px;
    /* text column gets the larger share, as on the Home page */
    flex: 0 1 560px;
    max-width: 560px;

    /* the photo column (second child) sits beside it */
    &:last-child {
        flex: 0 1 480px;
        max-width: 480px;
    }

    @media screen and (max-width: 1200px) {
        flex: none;
        width: 100%;

        &:last-child {
            flex: none;
        }
    }

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: auto;
        display: flex;
        justify-content: center;
    }
    `;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 5px;
    
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }

    `;

export const TopLine = styled.div`
    /* eyebrow label, same style as the Home page and Bucket List */
    color: ${({ lightTopLine }) => (lightTopLine ? '#c9d1ff' : '#4b59F7')};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
    `;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 56px;
    line-height: 1.1;

    @media screen and (max-width: 768px) {
        font-size: 42px;
    }
    color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
    `;

export const Subtitle = styled.p`
    max-width: 540px;
    margin-bottom: 35px;
    font-size: 19px;
    line-height: 1.6;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
    `;

// slow rotation for the light behind the slider
const flow = keyframes`
    from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
    50%  { transform: translate(-50%, -50%) rotate(180deg) scale(1.08); }
    to   { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
`;

export const ImgWrapper = styled.div`
    position: relative;
    isolation: isolate;
    max-width: 555px;
    width: 100%;
    display: flex;
    flex:1;
    justify-content: center;

    /* flowing light behind the slider, matching the Home and About pages */
    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: conic-gradient(from 0deg, #4b59f7, #4ade80, #0467fb, #8fa0ff, #4b59f7);
        /* radial mask gives soft edges without a costly blur filter */
        -webkit-mask-image: radial-gradient(circle, #000 25%, transparent 68%);
        mask-image: radial-gradient(circle, #000 25%, transparent 68%);
        opacity: 0.55;
        will-change: transform;
        transform: translate(-50%, -50%);
        animation: ${flow} 16s linear infinite;
        pointer-events: none;
    }

    @media (prefers-reduced-motion: reduce) {
        &::before {
            animation: none;
        }
    }
    `;


