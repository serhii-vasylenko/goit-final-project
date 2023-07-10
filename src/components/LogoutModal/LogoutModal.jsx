import ReactDOM from 'react-dom';
import { Backdrop, Modal, Text, BtnList, Btn, CloseModal } from './LogoutModal.styled';
const modalRoot = document.getElementById('modal-root');


export const LogoutModal = ({ modalIsOpen, setModalIsOpen }) => {
    const onCloseClick = () => {
        document.body.classList.remove('modal-open')
        setModalIsOpen(false)
    }
    const onCloseBackdropClick = (e) => {
        const list = e.currentTarget.classList
        // if (list.contains('open')) {
        //     console.log('yes');
        // }
    }

    return ReactDOM.createPortal(
        <Backdrop className={modalIsOpen ? 'open' : ' '} onClick={(e)=> onCloseBackdropClick(e)}>
            <Modal>
                <CloseModal onClick={()=> onCloseClick()}/>
                <Text>Are you sure you want to log out?</Text>
                <BtnList>
                    <li><Btn>Log out</Btn></li>
                    <li><Btn className='cancel' onClick={()=> onCloseClick()}>Cancel</Btn></li>
                </BtnList>
            </Modal>
        </Backdrop>
        ,
        modalRoot
    )
}