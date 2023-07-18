import styled from '@emotion/styled';
import { useLocation } from 'react-router';

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-right: 50px;
  }
`;
const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background-color: #d9d9d9;
  border-radius: 50px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const UserName = styled.p`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: 12px;
  font-weight: 600;
  line-height: 170%;
  margin-left: 14px;
  transition: color ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};
  

  
  &:hover {
    color: ${({theme }) => theme.colors.accentColor};
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    font-size: 14px;
     ${() => {
    const location = useLocation();
    if (location.pathname.includes('/main')) {
      return `
        color: #22252a`;
    }
}}
  }

  ${() => {
    const location = useLocation();
  if (location.pathname.includes('/recipes/')) {
      return `
        color: #22252a`;
    }
}}

`;

export { UserWrapper, ImgContainer, UserImg, UserName };
