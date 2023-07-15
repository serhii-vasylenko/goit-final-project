import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const onModalClick = () => {
    setIsOpen(!isOpen);
  };

  const { user, isLoggedIn } = useSelector(selectAuth)
  
  return (
    <UserWrapper onClick={() => onModalClick()}>
      <ImgContainer>
        {user.avatarURL ? <UserImg src={user.avatarURL} /> : <UserImg src={defaultImg} />}
      </ImgContainer>
      {isLoggedIn ? (
        <UserName>{user.name}</UserName>
      ) : (
        <UserName>Anonym</UserName>
      )}
      <UserLogoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </UserWrapper>
  );
};
