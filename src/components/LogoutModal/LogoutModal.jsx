import ReactDOM from 'react-dom';
import {
  Backdrop,
  Modal,
  Text,
  BtnList,
  Btn,
  CloseModal,
  BtnLogout,
} from './LogoutModal.styled';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
const modalRoot = document.getElementById('modal-root');

export const LogoutModal = ({ modalIsOpen, setModalIsOpen }) => {
  const onCloseClick = useCallback((e) => {
    document.body.classList.remove('modal-open');
    setModalIsOpen(false);
    e.stopPropagation()

  }, [setModalIsOpen]);

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        onCloseClick(e);

      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onCloseClick]);

  useEffect(() => {
    if (modalIsOpen) {
      return;
    }
    document.body.classList.remove('modal-open');
  }, [modalIsOpen]);

  const dispatch = useDispatch();

  const handleLogout = () => {
    document.body.classList.remove('modal-open');
    setModalIsOpen(false);
    dispatch(logoutUser());
  };

  return ReactDOM.createPortal(
    <Backdrop
      className={modalIsOpen ? 'open' : null}
      onClick={(e) => onCloseClick(e)}
    >
      <Modal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <CloseModal onClick={(e) => onCloseClick(e)} />
        <Text>Are you sure you want to log out?</Text>
        <BtnList>
          <li>
            <BtnLogout to="/" onClick={handleLogout}>Log out</BtnLogout>
          </li>
          <li>
            <Btn className="cancel" onClick={(e) => onCloseClick(e)}>
              Cancel
            </Btn>
          </li>
        </BtnList>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
