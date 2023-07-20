import styled from '@emotion/styled';

import { ReactComponent as ErrorIcon } from '../../images/registrationPage/icons/error.svg';
import { ReactComponent as CorrectIcon } from '../../images/registrationPage/icons/correct.svg';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 335px;
  padding: 15px 15px 30px 15px;

  position: absolute;
  top: 305px;
  left: 50%;
  transform: translate(-50%, 0);

  border-radius: 30px;
  color: var(--white-color);
  background-color: var(--background-authForm-color);

  @media (min-width: 768px) {
    width: 500px;
    padding: 50px 15px 50px 15px;
    top: 444px;
  }
  @media (min-width: 1280px) {
    top: 128px;
    left: 75%;

    width: 500px;
    padding: 15px 15px 50px 15px;
  }

  @media (min-width: 1640px) {
    top: 300px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--white-color);
  margin-top: 10px;
  margin-bottom: 35px;
  margin-left: 17px;

  @media (min-width: 768px) {
    margin-left: 34px;
  }

  @media (min-width: 1280px) {
    font-size: 28px;
    font-weight: 600;

    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 34px;
  }
`;

export const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: -34px;
  margin-left: 20px;
  z-index: 2;

  @media (min-width: 1280px) {
    margin-bottom: -42px;
    margin-left: 40px;
  }
`;

export const LabelIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--background-authForm-color);
  stroke: var(--white-color);
  opacity: 0.8;

  position: absolute;
  top: 15px;
  left: 26px;

  stroke: ${props => {
    switch (props.ValidationState) {
      case 'correct':
        return '#3CBC81';
      case 'error':
        return '#E74A3B';
      default:
        return '#fafafa';
    }
  }};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 18px;
    left: 46px;
  }

  @media (min-width: 1280px) {
    top: 17px;
    left: 46px;
  }
`;

export const ErrorIconStyled = styled(ErrorIcon)`
  position: absolute;
  right: 25px;
  top: 13px;

  @media (min-width: 768px) {
    right: 55px;
    top: 20px;
  }
`;

export const CorrectIconIconStyled = styled(CorrectIcon)`
  position: absolute;
  right: 25px;
  top: 13px;

  @media (min-width: 768px) {
    right: 55px;
    top: 20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  width: 279px;
  height: 45px;
  border: 1px solid;
  background-color: var(--background-authForm-color);
  padding-left: 40px;
  margin: 0 auto;
  margin-bottom: 3px;

  font-family: inherit;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.9;
  border-radius: 6px;
  transition: var(--transition-duration);

  &::placeholder {
    font-size: 14px;
    opacity: 0.8;
  }

  &:focus,
  :hover {
    border-color: var(--white-color);
    outline: 0;
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 59px;
    font-size: 18px;
    padding-left: 45px;

    &::placeholder {
      font-size: 18px;
    }
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 59px;
    font-size: 16px;
    padding-left: 47px;
  }

  border-color: ${props => {
    switch (props.ValidationState) {
      case 'correct':
        return '#3CBC81';
      case 'error':
        return '#E74A3B';
      default:
        return 'gray';
    }
  }};
`;

export const ErrMessage = styled.span`
  color: #e74a3b;
  margin-left: 17px;
  font-size: 14px;

  @media (min-width: 768px) {
    margin-left: 37px;
  }
`;

export const BtnSubmit = styled.button`
  height: 45px;
  background-color: #8baa36;
  border: 1px solid gray;
  border-radius: 6px;
  width: 279px;
  height: 45px;
  margin: 0 auto;
  color: var(--white-color);

  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  transition: var(--transition-duration);

  @media (min-width: 768px) {
    width: 400px;
    height: 59px;
    margin-top: 20px;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 59px;
    font-size: 18px;
  }

  &:focus,
  :hover {
    color: var(--background-color-circle);
  }
`;
