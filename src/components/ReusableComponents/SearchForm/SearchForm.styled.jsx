import styled from '@emotion/styled';

export const Input = styled.input`
  box-sizing: border-box;
  width: 295px;
  padding: 16px 32px;
  drop-shadow: 0px 4px 97px rgba(34, 37, 42, 0.03);
  background-color: ${({ theme }) => theme.colors.inputSearchBGColor};
  border-radius: 24px 44px;
  border: ${({ theme }) => theme.borders.inputSearchBorder};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: ${({ theme }) => theme.fontSizes[12]}px;
  line-height: ${({ theme }) => theme.lineHeights[1_2]};

  transition: all ${({ theme }) => theme.transforms.transitionDuration}
    ${({ theme }) => theme.transforms.timingFunction};

  :hover,
  :focus,
  :active {
    border: ${({ theme }) => theme.borders.inputSearchBorderHover};
    outline: rgba(35, 38, 42, 0.2);
  }

  ::placeholder {
    color: ${({ theme }) => theme.staticColors.placeholderColor};
  }

  @media screen and (min-width: 768px) {
    width: 362px;
    padding: 17px 38px;
    font-size: ${({ theme }) => theme.fontSizes[14]}px;
    line-height: ${({ theme }) => theme.lineHeights[1_2]};
  }

  @media screen and (min-width: 1280px) {
    width: 510px;
    padding: 23px 48px;
    font-size: ${({ theme }) => theme.fontSizes[16]}px;
  }
`;
export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
