import { useEffect, useRef, useState } from 'react';
import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';
import {
  UserWrapper,
  ImgContainer,
  UserImg,
  UserName,
} from './UserLogo.styled';
import defaultImg from '../../images/default-img.png';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';

export const UserLogo = () => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoggedIn } = useSelector(selectAuth)

  const onModalClick = (event) => {
    setIsOpen(!isOpen);
    event.stopPropagation();
  };

    useEffect(() => {

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      };
      const closeModal = (event) => {
        if (!modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }      
      }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('click', closeModal);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', closeModal);

    };
    }, [isOpen, setIsOpen, modalRef]);
    
  return (
    <UserWrapper onClick={(event) => onModalClick(event)} ref={modalRef}>
      <ImgContainer>
        {user.avatarURL ? <UserImg src={user.avatarURL} /> : <UserImg src={defaultImg} />}
      </ImgContainer>
      {isLoggedIn ? (
        <UserName>{user.name}</UserName>
      ) : (
        <UserName>Anonym</UserName>
      )}
      <UserLogoModal isOpen={isOpen} setIsOpen={setIsOpen} modalRef={modalRef}/>
    </UserWrapper>
  );
};
