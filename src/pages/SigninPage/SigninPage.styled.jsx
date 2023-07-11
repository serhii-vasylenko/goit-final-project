import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #fafafa;
  text-decoration: underline;
  font-size: 14px;
  position: absolute;
  top: 580px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    top: 700px;
  }

  @media (min-width: 1280px) {
    top: 540px;
    left: 75%;
    font-size: 16px;
  }

  @media (min-width: 1640px) {
    top: 700px;
  }
`;
