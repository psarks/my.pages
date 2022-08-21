import React from 'react'
import { Modal } from './modal'

import {Container} from './modal.elements'
import  {GlobalStyle,Button} from '../../globalStyles'


const CVModal = () => {
  const [showModal,setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);

  };

    return (
        <>
          <Container>
            <Button onClick={openModal}>
                I am a modal 
            </Button>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <GlobalStyle/>
          </Container>  
        </>
    )
}

export default CVModal;
