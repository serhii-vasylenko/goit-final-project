import { LogoutModal } from "components/LogoutModal/LogoutModal";
import { Modal, ModalWrapper, ModalText, EditIcon, Button, ArrowIcon } from "./UserLogoModal.styled"
import { useState } from "react";

export const UserLogoModal = ({ isOpen, setIsOpen }) => {
    const[modalIsOpen, setModalIsOpen] = useState(false)
    const onLogoutClick = () => {
        setModalIsOpen(true)
        document.body.classList.add('modal-open')
        setIsOpen(false)
   }
    return <>
        <Modal className={isOpen ? 'active' : ''}>
        <ModalWrapper>
            <ModalText>Edit profile</ModalText>
            <EditIcon />
        </ModalWrapper>
        <Button onClick={() => onLogoutClick()}>Log out
            <ArrowIcon/>
        </Button>
        </Modal>
        <LogoutModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
       
        
}