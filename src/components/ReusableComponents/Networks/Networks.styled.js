import styled from '@emotion/styled';

export const NetworkList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const NetworkListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  cursor: pointer;

  &svg {
    color: var(--accent-color);

    &:hover,
    &:focus {
      color: #ffffff;
    }
  }
`;