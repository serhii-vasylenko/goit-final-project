import ReactDOM from 'react-dom';
// import { Backdrop, Modal, Text, BtnList, Btn, CloseModal, BtnLogout } from './LogoutModal.styled';
import { useCallback, useEffect } from 'react';
const modalRoot = document.getElementById('modal-root');


export const Backdrop = ({ modalIsOpen, setModalIsOpen }) => {
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
        // <Backdrop className={modalIsOpen ? 'open' : ' '} onClick={()=> onCloseClick()}>
           
        // </Backdrop>
        // ,
        modalRoot
    )
}