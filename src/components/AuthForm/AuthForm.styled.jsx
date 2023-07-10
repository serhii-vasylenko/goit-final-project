import styled from '@emotion/styled';

import { ReactComponent as ErrorIcon } from '../../images/registrationPage/icons/error.svg';
import { ReactComponent as CorrectIcon } from '../../images/registrationPage/icons/correct.svg';

export const Form = styled.form`
  font-family: Poppins;
  display: flex;
  flex-direction: column;

  width: 335px;
  height: 350px;
  padding: 50px;

  border-radius: 30px;
  color: #fafafa;
  background-color: #2a2c36;

  margin: 0 auto;

  @media (min-width: 768px) {
    width: 419px;
    height: 500px;
  }
  @media (min-width: 1280px) {
    width: 481px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #fafafa;
  margin-bottom: 50px;
`;

export const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: -43px;
  margin-left: 20px;
  z-index: 2;
`;

export const UserIconStyled = styled.svg`
  stroke: #fff;
`;

export const EnvelopeIconStyled = styled.svg`
  stroke: #fff;
`;

export const LockIconStyled = styled.svg`
  stroke: #fff;
`;

export const ErrorIconStyled = styled(ErrorIcon)`
  position: absolute;
  right: 15px;
  top: 20px;
`;

export const CorrectIconIconStyled = styled(CorrectIcon)`
  position: absolute;
  right: 15px;
  top: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
`;

export const Input = styled.input`
  height: 59px;
  border: 1px solid;
  background-color: #2a2c36;
  padding-left: 50px;
  padding-top: 3px;

  font-family: inherit;
  font-size: 16px;
  color: #fafafa;
  border-radius: 6px;

  transition: border-color 0.15s ease-in-out;

  &::placeholder {
    color: white;
  }

  &:focus,
  :hover {
    border-color: #fafafa;
    outline: 0;
    color: #fafafa;
  }

  border-color: ${props => {
    switch (props.ValidationState) {
      case 'correct':
        return 'green';
      case 'warn':
        return 'yellow';
      case 'error':
        return 'tomato';
      default:
        return 'gray';
    }
  }};
`;

export const ErrMessage = styled.span`
  color: tomato;
  margin-top: 8px;
  font-size: 14px;
`;

export const BtnSubmit = styled.button`
  height: 59px;
  background-color: #8baa36;
  border: 1px solid gray;
  border-radius: 6px;
  /* margin-top: 60px; */
  color: white;

  font-family: inherit;
  font-size: 16px;
`;