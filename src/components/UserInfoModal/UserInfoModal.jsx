import { Link } from "react-router-dom/dist"
import { Modal, ModalWrapper, ModalText, EditIcon } from "./UserInfoModal.styled"
export const UserInfoModal = () => {
   
    return (<Modal>
        <ModalWrapper>
            <ModalText>Edit profile</ModalText>
            <EditIcon />
        </ModalWrapper>
        <Link to={'/logout'} style={{ border: '1px solid green', padding: '15px', marginTop: '50px', display: 'block' }}>Log out</Link>
    </Modal>
        
    )
}
