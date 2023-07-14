import ReactDOM from 'react-dom';
import { Backdrop, Modal, CloseModal } from 'components/LogoutModal/LogoutModal.styled';
import { useCallback, useEffect } from 'react';
import { ChangeUserDataForm } from 'components/ChangeUserDataForm/ChangeUserDataForm';
const modalRoot = document.getElementById('modal-root');


export const UserInfoModal = ({ editIsOpen, setEditIsOpen }) => {

    const onCloseClick = useCallback((e) => {
        e.stopPropagation()
        document.body.classList.remove('modal-open');
        setEditIsOpen(false);

    }, [setEditIsOpen]);

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
            onCloseClick(e)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [onCloseClick])

    useEffect(() => {
        if (editIsOpen) {
          return;
        }
        document.body.classList.remove('modal-open');
      }, [editIsOpen]);

    return ReactDOM.createPortal(
        <Backdrop className={editIsOpen ? 'open' : ' '} onClick={(e)=> onCloseClick(e)}>
            <Modal onClick={e => { e.stopPropagation()}}>
                <CloseModal onClick={(e) => onCloseClick(e)} />
                <ChangeUserDataForm setEditIsOpen={setEditIsOpen} />
            </Modal>
        </Backdrop>
        ,
        modalRoot
    )
}
