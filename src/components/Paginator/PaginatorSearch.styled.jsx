import styled from '@emotion/styled';

export const PaginationStyled = styled.div`
  display: inline-flex;
  justify-content: center;
  align-iems: center;
  border-radius: 26px;
  background: #fafafa;
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
  padding: 12px 20px;

  @madia and screen(min-width: 768px) {
    padding: 14px 20px;
  }
`;

export const ArrowButton = styled.button`
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Icon = styled.svg`
  width: 8px;
  height: 15px;
  fill: rgba(169, 169, 169, 0.8);
  
  &:disabled {
    fill: rgba(169, 169, 169, 0.3);
    cursor: not-allowed;
  }

  &:hover {
    fill: #656565;
  }
`;

export const NumberButton = styled.button`
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.recipeCardDescriptionColor};
  cursor: pointer;
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
