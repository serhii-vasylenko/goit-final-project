import ReactSelect from 'react-select';
import styled from '@emotion/styled/macro';
import { Field } from 'formik';

export const Container = styled.div`
  position: relative;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  color: #3e4462;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
`;
export const SelectContainer = styled.div`
  margin-right: 14px;
  min-width: 194px;

  @media screen and (min-width: 768px) {
    margin-right: 32px;
    min-width: 398px;
  }
`;

export const StyledSelect = styled(ReactSelect)`
 
  &:hover,
  &:focus {
    border: 1px solid rgba(217, 217, 217, 1);
    border-radius: 6px;
  }
  

  .custom-select {
    &__control {
      font-family: 'Poppins';
      border: none;
      border-radius: 6px;
      background-color: rgba(217, 217, 217, 0.157);
      font-size: 14px;
      line-height: 1;
      cursor: text;

      @media screen and (min-width: 768px) {
        font-size: 18px;
      }
    }

    &__menu {
      padding: 4px 4px 4px 18px;
      box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
        rgba(0, 0, 0, 0.03);
      border: none;
      border-radius: 6px;
    }

    &__menu-is-open {
      /* background: #ffffff; */
    }

    &__menu-list {
      border: none;
      height: calc(6 * 20px + 10px);
    }
    &__value-container {
      padding: 12px 8px;
    }

    &__single-value {
      color: #23262a;
      line-height: 1;
      letter-spacing: -0.28px;
    }

    &__option {
      margin: 6px 0;
      padding: 0 3px;

      font-size: 12px;
      color: #000000;
      letter-spacing: -0.24px;
      opacity: 0.5;
      cursor: pointer;

      @media screen and (min-width: 768px) {
        font-size: 14px;
      }
    }

    &__option--is-focused {
      background-color: rgba(139, 170, 54, 0.2);
    }

    &__option--is-selected {
      background-color: var(--accent-color);
    }

    &__indicator-separator {
      display: none;
    }

    &__indicator {
      cursor: pointer;

      color: var(--accent-color);

      &:hover,
      &:focus {
        transform: scale(1.1);
      }

      transition: stroke var(--transition-duration) var(--timing-function);
    }

    &__menu-list::-webkit-scrollbar {
      width: 4px;
      height: 0px;
    }
    &__menu-list::-webkit-scrollbar-track {
      background: transparent;
    }
    &__menu-list::-webkit-scrollbar-thumb {
      padding: 4px 0;
      border-radius: 12px;
      background: #e7e5e5;
      cursor: pointer;
    }
    &__menu-list::-webkit-scrollbar-thumb:hover {
      background: var(--accent-color);
    }
  }
`;

export const MeasureFieldContainer = styled.div`
  margin-right: 8px;
  width: 109px;

  @media screen and (min-width: 768px) {
    margin-right: 40px;
    width: 214px;
  }
`;

export const MeasureField = styled(Field)`
  outline: none;
  width: 109px;
  height: 54px;
  padding: 0 0 0 5px;
  border: none;
  border-radius: 6px;
  background-color: rgba(217, 217, 217, 0.157);

  color: #23262a;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.28px;

  font-family: 'Poppins';
  color: #23262a;

  /* padding: 16px 12px; */
  cursor: text;

  &:focus,
  &:hover {
    border: 1px solid rgba(217, 217, 217, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    height: 59px;
    width: 214px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

export const Svg = styled.svg`
  stroke: #333333;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  transition: stroke var(--transition-duration) var(--timing-function);
`;

export const Button = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:active {
    transform: scale(1.01);
  }

  &:hover {
    ${Svg} {
      stroke: var(--accent-color);
    }
  }

  &:focus {
    border: 1px solid rgba(217, 217, 217, 1);
    border-radius: 4px;
    ${Svg} {
      stroke: var(--accent-color);
    }
  }
`;
