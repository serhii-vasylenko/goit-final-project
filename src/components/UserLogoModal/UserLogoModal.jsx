import { Modal, ModalWrapper, ModalText, EditIcon } from "./UserLogoModal.styled"
import MainButton from "components/ReusableComponents/MainButton/MainButton"
export const UserLogoModal = () => {
   
    return <Modal>
        <ModalWrapper>
            <ModalText>Edit profile</ModalText>
            <EditIcon />
        </ModalWrapper>
        <MainButton
            nameButton="Log out"
            fontSize="14px"
            padding={{
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '35px',
                paddingRight: '35px',
            }}
            cofByMedia768={{
                font: 1.2,
                padX: 1.02,
                padY: 1.63,
              }}
              cofByMedia1440={{
                font: 1.2,
                padX: 1.46,
                padY: 1.63,
              }}
            bgColor="#8BAA36"
        />
    </Modal>
        
}