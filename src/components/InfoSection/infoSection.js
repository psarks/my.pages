import React from 'react';



/*import {ReactTypical} from "@deadcoder0904/react-typical";
<Img src={img} alt={alt}/>*/

import { Container } from '../../globalStyles'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements'


const InfoSection = ({lightBg, imgStart, lightTopLine, lightTextDesc, description, headline, lightText, topLine, img, alt, start, children}) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
              <Container>
                <InfoRow imgStart ={imgStart}>
                    <InfoColumn>
                      <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        {/* optional slot under the intro text, used by Home for the action buttons */}
                        {children}
                      </TextWrapper> 
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                        
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                        
                    </InfoColumn>
                </InfoRow>
              </Container>
        </InfoSec>  
        </>
    )
}

export default InfoSection;
