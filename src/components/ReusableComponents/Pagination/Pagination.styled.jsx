import styled from '@emotion/styled/macro';

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.recipeCardBgColor};
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
  border-radius: 33px;
  padding: 17px 20px;
`;

export const Item = styled.li`
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: ${({ theme }) => theme.colors.recipeCardDescriptionColor};
  cursor: ${props => (props.dots || props.disabled ? 'default' : 'pointer')};
  border-radius: 50%;
  background-color: ${props =>
    props.selected
      ? ({ theme }) => theme.colors.paginationBgHoverColor
      : 'transparent'};
  &:hover {
    background-color: ${props =>
      props.disabled
        ? 'transparent'
        : ({ theme }) => theme.colors.paginationBgHoverColor};
  }
`;

export const Icon = styled.svg`
  width: 8px;
  height: 15px;

  fill: ${props =>
    props.disabled
      ? '#5c5b5b'
      : ({ theme }) => theme.colors.recipeCardDescriptionColor};
`;
