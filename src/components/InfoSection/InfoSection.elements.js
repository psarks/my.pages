import styled, { keyframes } from 'styled-components';

export const InfoSec = styled.div`
    color: #fff;
    padding: 170px 0 110px;
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
    flex: 0 1 540px;
    max-width: 540px;

    @media screen and (max-width: 1200px) {
        flex: none;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    `;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 0;

    `;

export const TopLine = styled.div`
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
    font-size: 48px;
    line-height: 1.1;
    color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
    `;

export const Subtitle = styled.p`
    max-width: 480px;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
    `;

const flow = keyframes`
    from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
    50%  { transform: translate(-50%, -50%) rotate(180deg) scale(1.08); }
    to   { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
`;

export const ImgWrapper = styled.div`
    position: relative;
    isolation: isolate;
    /* shrink to the photo so the glow is sized and centred on the photo itself */
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    /* slowly flowing light behind the photo */
    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        width: 120%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: conic-gradient(from 0deg, #4b59f7, #4ade80, #0467fb, #8fa0ff, #4b59f7);
        /* soft edges come from a radial mask instead of filter: blur, which is costly to repaint every frame */
        -webkit-mask-image: radial-gradient(circle, #000 25%, transparent 68%);
        mask-image: radial-gradient(circle, #000 25%, transparent 68%);
        opacity: 0.6;
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

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    border-radius: 32px;
    /* the SVG's own size is small, so set the height explicitly; capped by viewport height so it can't dominate short screens */
    height: min(560px, 70vh);
    max-width: 100%;
    aspect-ratio: 260 / 321;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        height: min(420px, 60vh);
    }
    `;

