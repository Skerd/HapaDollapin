
import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
  } from 'reactstrap';

const ConfirmationModal = ({ handleClose, handleConfirmation, confirmationButtonText, show, modalInfo}) => {

    return (
        <Modal isOpen={show} toggle={handleClose}>
            <ModalHeader className="text-danger" toggle={handleClose}>
                {modalInfo.title}
            </ModalHeader>
            <ModalBody>
                <Label>{modalInfo.body}</Label>
            </ModalBody>
            <ModalFooter className="justify-content-center">
                <Button outline color="success" onClick={handleConfirmation} >
                    {confirmationButtonText}
                </Button>
                <Button color="secondary" onClick={handleClose} >
                    Mbyll
                </Button>
            </ModalFooter>
        </Modal>
    );
  };

  export default ConfirmationModal;
