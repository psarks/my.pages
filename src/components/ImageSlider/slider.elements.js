import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

export const Section = styled.div`
    position: relative;
    width: 100%;
    max-width: 540px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Img = styled.img`
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 10px;

`;

export const NavRight = styled(IoIosArrowForward)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.7));
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;

`;

export const NavLeft = styled(IoIosArrowBack)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.7));
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    
`;

export const Slide = styled.div`
    opacity: 0;
    transition-duration: 1s ease;
`;

export const SlideActive = styled.div`
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
`;

