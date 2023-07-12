import { LogoutModal } from "components/LogoutModal/LogoutModal";
import { Modal, ModalWrapper, ModalText, EditIcon, Button, ArrowIcon } from "./UserLogoModal.styled"
import { useState } from "react";
import { UserInfoModal } from "components/UserInfoModal/UserInfoModal";

export const UserLogoModal = ({ isOpen, setIsOpen }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [editIsOpen, setEditIsOpen] = useState(false)
    const onLogoutClick = () => {
        setModalIsOpen(true)
        document.body.classList.add('modal-open')
        setIsOpen(false)
   }
    const onEditClick = () => {
        setEditIsOpen(true)
        document.body.classList.add('modal-open')
        setIsOpen(false)
   }
    return <>
        <Modal className={isOpen ? 'active' : ''}>
        <ModalWrapper onClick={() => onEditClick()}>
            <ModalText>Edit profile</ModalText>
            <EditIcon />
        </ModalWrapper>
        <Button onClick={() => onLogoutClick()}>Log out
            <ArrowIcon/>
        </Button>
        </Modal>
        <LogoutModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        <UserInfoModal editIsOpen={editIsOpen} setEditIsOpen={setEditIsOpen} />
    </>
       
        
}