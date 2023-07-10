import styled from '@emotion/styled';

export const Input = styled.input`
  width: 295px;
  padding: 16px 32px;
  drop-shadow: 0px 4px 97px rgba(34, 37, 42, 0.03);
  background-color: #ffffff;
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  color: #23262a;
  font-size: 12px;
  line-height: 1.2;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus,
  :active {
    border: 1px solid rgba(35, 38, 42, 0.2);
    outline: 1px solid rgba(35, 38, 42, 0.2);
  }

  ::placeholder {
    color: #bdbdbd;
  }

  @media screen and (min-width: 768px) {
    width: 362px;
    padding: 17px 38px;
    font-size: 14px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    padding: 23px 48px;
    font-size: 16px;
    line-height: 1.2;
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
