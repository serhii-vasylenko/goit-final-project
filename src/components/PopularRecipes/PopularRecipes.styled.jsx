import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const Item = styled.li`
  @media (min-width: 768px) and (max-width: 1279px) {
    &:nth-of-type(3),
    &:nth-of-type(4) {
      display: none;
    }
  }
`;
