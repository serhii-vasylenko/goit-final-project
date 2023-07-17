import styled from '@emotion/styled/macro';
import { ReactComponent as ErrorIcon } from '../../images/registrationPage/icons/error.svg';
import { ReactComponent as CorrectIcon } from '../../images/registrationPage/icons/correct.svg';
export const Subscribe = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / span 3;
  }
  @media (min-width: 1280px) {
    grid-column: 4 / span 2;
    width: 339px;
    margin-left: auto;
  }
`;

export const Title = styled.h4`
  display: none;
  @media (min-width: 1280px) {
    display: block;
    font-size: 18px;
    font-weight: 700;
    color: var(--white-color);
    margin-bottom: 14px;
  }
`;

export const Text = styled.p`
  display: none;
  @media (min-width: 1280px) {
    font-style: normal;
    display: block;
    color: var(--white-color);
    font-size: 14px;
    line-height: 1.3;
    margin-bottom: 28px;
  }
`;

export const Form = styled.form`
  width: 204px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    justify-content: center;
    width: auto;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 12px;
    /* justify-content: center; */
    width: 339px;
  }
`;

export const Icon = styled.svg`
  stroke: ${props => {
    switch (props.ValidationState) {
      case 'correct':
        return '#3CBC81';
      case 'error':
        return '#E74A3B';
      default:
        return '#fafafa7f';
    }
  }};
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const ErrorIconStyled = styled(ErrorIcon)`
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: 18px;
  }
`;

export const CorrectIconIconStyled = styled(CorrectIcon)`
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: 18px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  gap: 12px;
  padding: 13px 13px;
  border: 1px solid;
  border-color: ${props => {
    switch (props.ValidationState) {
      case 'correct':
        return '#3CBC81';
      case 'error':
        return '#E74A3B';
      default:
        return '#fafafa7f';
    }
  }};
  border-radius: 6px;

  @media (min-width: 768px) {
    width: 259px;
  }
  @media (min-width: 1280px) {
    width: 100%;
  }

  &:hover,
  &:focus-within {
    border-color: ${props => {
      switch (props.ValidationState) {
        case 'correct':
          return '#3CBC81';
        case 'error':
          return '#E74A3B';
        default:
          return '#fafafa';
      }
    }};
    ${Icon} {
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
    }
  }
`;
export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: var(--white-color);
  outline: transparent;
  overflow: hidden;
  &::placeholder {
    font-size: 10px;
    color: var(--white-color);
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;
