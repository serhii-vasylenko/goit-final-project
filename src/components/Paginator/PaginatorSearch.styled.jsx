import styled from '@emotion/styled';

export const PaginationStyled = styled.div`
  display: inline-flex;
  // justify-content: center;
  // align-iems: center;
  border-radius: 26px;
  background: ${({ theme }) => theme.colors.paginatorBGColor};
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
  padding: 12px 8px;

  @media and screen(min-width: 768px) {
    padding: 14px 20px;
  }
`;

export const ArrowButton = styled.button`
  width: 27px;
  height: 27px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
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
  fill: ${({ theme }) => theme.staticColors.iconFillGrey};

  &:disabled {
    fill: ${({ theme }) => theme.staticColors.iconDisabledFillGrey};
    cursor: not-allowed;
  }

  &:hover {
    fill: ${({ theme }) => theme.staticColors.iconHoverFillGrey};
    cursor: not-allowed;
  }
`;

export const NumberButton = styled.button`
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 3px 5px;
  margin: 0 5px;
  font-size: ${({ theme }) => theme.fontSizes[14]}px;
  color: ${({ theme }) => theme.colors.recipeCardDescriptionColor};
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.paginationBgHoverColor : 'transparent'};
  &:hover {
    background-color: ${({ theme }) => theme.colors.paginationBgHoverColor};
  }
  &.ellipsis-button {
    pointer-events: none;
    &:hover {
      bacground-color: transparent;
    }

    @media and screen(min-width: 768px) {
      width: 27px;
      height: 27px;
      padding: 5px 10px;
    }
  }
`;
