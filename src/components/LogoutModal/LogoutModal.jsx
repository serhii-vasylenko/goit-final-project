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
  const onCloseClick = useCallback(() => {
    document.body.classList.remove('modal-open');
    setModalIsOpen(false);
  }, [setModalIsOpen]);

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        onCloseClick();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onCloseClick]);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return ReactDOM.createPortal(
    <Backdrop
      className={modalIsOpen ? 'open' : ' '}
      onClick={() => onCloseClick()}
    >
      <Modal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <CloseModal onClick={() => onCloseClick()} />
        <Text>Are you sure you want to log out?</Text>
        <BtnList>
          <li>
            <BtnLogout to="/" onClick={handleLogout}>Log out</BtnLogout>
          </li>
          <li>
            <Btn className="cancel" onClick={() => onCloseClick()}>
              Cancel
            </Btn>
          </li>
        </BtnList>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
