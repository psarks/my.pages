import React from 'react';
import {Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton} from './modal.elements'

export const Modal = ({ showModal, setShowModal }) => {
    return(  
    
    <> 
        {showModal ? ( 
            <Background>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={require('./cv2020.pdf')} alt='resume' />
                    <ModalContent>
                        hi
                    </ModalContent>
                    <CloseModalButton araia-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>

                </ModalWrapper>
            </Background>
        ):null}
    </>
    );
};