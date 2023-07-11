import ReactDOM from 'react-dom';
import { Backdrop, Modal, Text, BtnList, Btn, CloseModal } from './LogoutModal.styled';
import { useCallback, useEffect } from 'react';
const modalRoot = document.getElementById('modal-root');


export const LogoutModal = ({ modalIsOpen, setModalIsOpen }) => {
    const onCloseClick = useCallback(() => {
    document.body.classList.remove('modal-open');
    setModalIsOpen(false);
    }, [setModalIsOpen]);

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
            onCloseClick()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [onCloseClick])

   
    

    return ReactDOM.createPortal(
        <Backdrop className={modalIsOpen ? 'open' : ' '} onClick={()=> onCloseClick()}>
            <Modal onClick={e => { e.stopPropagation(); }}>
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