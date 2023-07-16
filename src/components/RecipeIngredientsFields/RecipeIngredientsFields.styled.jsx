import ReactSelect from 'react-select';
import styled from '@emotion/styled';
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
`;
export const SelectContainer = styled.div`
  margin-right: 14px;
  width: 194px;
`;

export const StyledSelect = styled(ReactSelect)`
  cursor: pointer;

  .custom-select {
    &__control {
      font-family: 'Poppins';
      border: none;
      border-radius: 6px;
      box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
        rgba(0, 0, 0, 0.03);
      background-color: rgba(217, 217, 217, 0.157);
      font-size: 14px;
      line-height: 1;
      cursor: text;
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
    &__option {
      margin: 6px 0;
      padding: 0 3px;

      font-size: 12px;
      color: #000000;
      letter-spacing: -0.24px;
      opacity: 0.5;
      cursor: pointer;
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
  width: 84px;
  margin-right: 33px;
`;

export const MeasureField = styled(Field)`
  /* height: 100%; */
  border: none;
  border-radius: 6px;
  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
    rgba(0, 0, 0, 0.03);
  background-color: rgba(217, 217, 217, 0.157);

  color: #000;
  font-size: 14px;
  line-height: 1;
  cursor: text;

  color: #23262a;
  font-family: 'Poppins';
  font-size: 14px;

  letter-spacing: -0.28px;
  padding: 16px 12px;
`;

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:active {
    transform: scale(1.01);
  }
`;

export const SVG = styled.svg`
  stroke: #333333;
  &:hover,
  &:focus {
    stroke: var(--accent-color);
  }

  transition: stroke var(--transition-duration) var(--timing-function);
`;
