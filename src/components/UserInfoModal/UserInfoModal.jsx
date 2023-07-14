import ReactDOM from 'react-dom';
import { Backdrop, Modal, CloseModal } from 'components/LogoutModal/LogoutModal.styled';
import { useCallback, useEffect } from 'react';
import { ChangeUserDataForm } from 'components/ChangeUserDataForm/ChangeUserDataForm';
const modalRoot = document.getElementById('modal-root');


export const UserInfoModal = ({ editIsOpen, setEditIsOpen }) => {

    const onCloseClick = useCallback((e) => {
        document.body.classList.remove('modal-open');
        setEditIsOpen(false);
        e.stopPropagation()

    }, [setEditIsOpen]);

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
        <Backdrop className={editIsOpen ? 'open' : ' '} onClick={(e)=> onCloseClick(e)}>
            <Modal onClick={e => { e.stopPropagation()}}>
                <CloseModal onClick={() => onCloseClick()} />
                <ChangeUserDataForm/>
            </Modal>
        </Backdrop>
        ,
        modalRoot
    )
}
