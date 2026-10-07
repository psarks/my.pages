import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #fff;
    padding: 170px 0 96px;

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
    color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59F7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    `;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
    `;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
    `;

export const ImgWrapper = styled.div`
    max-width: 555px;
    width: 100%;
    display: flex;
    flex:1;
    justify-content: center;
    `;


