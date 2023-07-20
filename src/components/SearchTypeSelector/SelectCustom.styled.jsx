import styled from '@emotion/styled';

export const PositionWrapper = styled.div`
  position: relative;
`;

export const StyledFormControl = styled.div`
  border: ${({ theme }) => theme.borders.inputSearchBorder};
  color: ${({ theme }) => theme.colors.selectTextColor};
  background-color: ${({ theme }) => theme.colors.selectBGColor};
  position: relative;
  width: 146px;
  border-radius: 6px;
  position: relative;
  text-align: left;
  padding: 10px 14px;
  font-size: ${({ theme }) => theme.fontSizes[12]}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: -0.24px;
  cursor: pointer;

  :hover,
  :focus,
  :activ {
    border: ${({ theme }) => theme.borders.inputSearchBorderHover};
  }

  svg {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
    fill: ${({ theme }) => theme.staticColors.iconFillGreen};
  }

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[14]}px;
    width: 175px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 198px;
  }
`;

export const OptionWrapper = styled.div`
  position: absolute;
  top: 34px;
  left: 0;
  z-index: 5;
`;

export const StyledSelect = styled.ul`
  background-color: ${({ theme }) => theme.colors.inputSearchBGColor};
  width: 146px;
  padding: 4px 0;
  font-size: ${({ theme }) => theme.fontSizes[12]}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: -0.24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border: ${({ theme }) => theme.borders.selectBorderHover};

  color: ${({ theme }) => theme.colors.selectTextColor};
  text-align: left;
  border-radius: 0px 0px 6px 6px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[14]}px;
    width: 175px;
  }

  @media screen and (min-width: 1280px) {
    width: 198px;
  }
`;

export const StyledMenuItem = styled.li`
  background-color: ${({ theme }) => theme.colors.inputSearchBGColor};
  width: 100%;
  padding: 8px 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dropDownColor};
  }

  @media screen and (min-width: 768px) {
    width: 175px;
  }

  @media screen and (min-width: 1280px) {
    width: 198px;
  }
`;
