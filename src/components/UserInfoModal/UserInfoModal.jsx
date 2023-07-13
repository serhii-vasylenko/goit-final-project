import ReactDOM from 'react-dom';
import { Backdrop, Modal, CloseModal } from 'components/LogoutModal/LogoutModal.styled';
import { ImgContainer, UserImg, SaveBtn, AddPhotoBtn, Plus, Field, UserIcon, Input, EditIcon, InputFile } from './UserInfoModal.styled';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import defaultImg from '../../images/default-img.png';
const modalRoot = document.getElementById('modal-root');


export const UserInfoModal = ({ editIsOpen, setEditIsOpen }) => {
      const { user } = useSelector(selectAuth);

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
                <form>
                     <div style={{position: 'relative'}}>
                        <ImgContainer>
                        <UserImg src={defaultImg} />
                        </ImgContainer>
                        <AddPhotoBtn>
                            <Plus />
                            <InputFile type='file'/>
                        </AddPhotoBtn>
                    </div>
                    <Field >
                        <UserIcon />
                        <EditIcon/>
                        <Input value={user.name} />
                    </Field>
                    <SaveBtn>Save changes</SaveBtn>
               </form>
            </Modal>
        </Backdrop>
        ,
        modalRoot
    )
}
