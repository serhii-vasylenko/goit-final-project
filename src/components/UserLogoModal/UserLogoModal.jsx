import { LogoutModal } from "components/LogoutModal/LogoutModal";
import { Modal, ModalWrapper, ModalText, EditIcon, Button, ArrowIcon } from "./UserLogoModal.styled"
import { useState, useEffect} from "react";
import { UserInfoModal } from "components/UserInfoModal/UserInfoModal";

export const UserLogoModal = ({ isOpen, setIsOpen }) => {
    const [editIsOpen, setEditIsOpen] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, setIsOpen]);

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
        <UserInfoModal editIsOpen={editIsOpen} setEditIsOpen={setEditIsOpen} setIsOpen={setIsOpen} />
    </>
       
        
}