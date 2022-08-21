import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

export const Section = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Img = styled.img`
    width: 500px;
    height: 350px;
    border-radius: 10px;

`;

export const NavRight = styled(IoIosArrowForward)`
    position: absolute;
    top: 46%;
    right: 32px;
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;

`;

export const NavLeft = styled(IoIosArrowBack)`
    position: absolute;
    top: 46%;
    left: 32px;
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

