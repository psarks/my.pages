import React, {useState} from 'react';
import { Link } from 'react-router-dom'



/*import {ReactTypical} from "@deadcoder0904/react-typical";
<Img src={img} alt={alt}/>*/

import { Container, Button } from '../../globalStyles'
import { Modal } from '../Modal/modal';
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './infoCv.elements'
import {pdfFile} from '../../components/Modal/cv2020.pdf'


const InfoCV = ({primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start}) => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
      setShowModal(prev => !prev);
  }
  
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
                        
                        <Button big fontBig primary={primary} onClick={openModal}>
                                {buttonLabel}
                            </Button>
                            <Modal showModal={showModal} setShowModal={setShowModal}>
                              <a href=""/>
                              </Modal>
                        
                      </TextWrapper> 
                    </InfoColumn>
                    <InfoColumn>
                       
                        
                    </InfoColumn>
                </InfoRow>
              </Container>
        </InfoSec>  
        </>
    )
}

export default InfoCV;