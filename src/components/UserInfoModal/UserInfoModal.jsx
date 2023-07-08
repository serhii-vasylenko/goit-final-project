import { Modal, ModalWrapper, ModalText, EditIcon } from "../UserLogoModal/UserLogoModal.styled"
export const UserInfoModal = () => {
   
    return (<Modal>
        <ModalWrapper>
            <ModalText>Edit profile</ModalText>
            <EditIcon />
        </ModalWrapper>
        <button style={{ border: '1px solid green', padding: '15px', marginTop: '50px', display: 'block' }}>Log out</button>
    </Modal>
        
    )
}
