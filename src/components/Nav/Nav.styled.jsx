import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Item = styled.li`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Link = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes[14]}px;
  font-weight: ${({ theme }) => theme.fontWeights.meduim};
  line-height: ${({ theme }) => theme.lineHeights[1_3]};
  color: ${({ theme }) => theme.colors.whiteColor};
  display: inline-block;

  transition: scale var(--timing-function) var(--transition-duration);
  &:hover {
    transform: scale(1.1);
  }
`;
