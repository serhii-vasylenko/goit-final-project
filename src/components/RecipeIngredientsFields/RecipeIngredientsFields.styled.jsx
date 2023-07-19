import ReactSelect from 'react-select';
import styled from '@emotion/styled/macro';
import { Field } from 'formik';

export const Container = styled.div`
  position: relative;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
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

export const BorderError = styled.div`
  .error {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.errorColor};
    border-radius: 8px;
  }

  transition: stroke ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};
`;

export const StyledSelect = styled(ReactSelect)`
box-shadow: none;
  .custom-select {
    &__control {
      font-family: 'Poppins';
      border: ${({ theme }) => theme.colors.selectBrdColor};
      border-radius: 6px;
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.selectBgColor};
      font-size: 14px;
      line-height: 1;
      cursor: text;
      

      &:hover,
      &--is-focused {
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.boxShadow};
        border-radius: 6px;
      }

      .error {
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.boxShadow};
        border-radius: 8px;
      }

      @media screen and (min-width: 768px) {
        font-size: 18px;
      }
    }

    &__placeholder {
      color: ${({ theme }) => theme.colors.selectPlaceholderColor};
    }

    &__input-container {
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }

    &__menu {
      padding: 4px 4px 4px 18px;
      margin: 0;
      box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
        rgba(0, 0, 0, 0.03);
      border: none;
      border-radius: 6px;
      background-color: ${({ theme }) => theme.colors.menuBgColor};
      color: ${({ theme }) => theme.colors.formLabelColor};
    }

    &__menu-list {
      height: calc(6 * 24px + 2px);

      @media screen and (min-width: 768px) {
        height: calc(6 * 27px + 2px);
      }
    }

    &__value-container {
      padding: 12px 8px;
    }

    &__single-value {
      color: ${({ theme }) => theme.colors.primaryTextColor};
      line-height: 1;
      letter-spacing: -0.28px;
    }

    &__option {
      margin: 6px 0;
      padding: 2px 0;

      font-size: 12px;
      letter-spacing: -0.24px;
      cursor: pointer;

      @media screen and (min-width: 768px) {
        font-size: 14px;
      }
    }

    &__option--is-focused {
      background-color: ${({ theme }) => theme.colors.menuFocusColor};
    }

    &__option--is-selected {
      background-color: ${({ theme }) => theme.colors.menuSelectColor};
    }

    &__indicator-separator {
      display: none;
    }

    &__indicator {
      cursor: pointer;

      color: ${({ theme }) => theme.colors.accentColor};

      &:hover,
      &:focus {
        transform: scale(1.1);
        color: ${({ theme }) => theme.colors.accentColor};
      }

      transition: stroke ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};
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
      background: ${({ theme }) => theme.colors.menuScrollbarThumbColor};
      transition: stroke ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};
      cursor: pointer;
    }
    &__menu-list::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.menuSelectColor};
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
  border: ${({ theme }) => theme.colors.selectBrdColor};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.selectBgColor};

  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.28px;
  font-family: 'Poppins';
  caret-color: ${({ theme }) => theme.colors.primaryTextColor};

  transition: box-shadow ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};

  cursor: text;

  &::placeholder {
    color: ${({ theme }) => theme.colors.fieldPlaceholderColor};
  }

  &:focus,
  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.boxShadow};
    border-radius: 6px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    height: 59px;
    width: 214px;
  }

  &.error {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.errorColor};
    border-radius: 6px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

export const Svg = styled.svg`
  stroke: ${({ theme }) => theme.colors.svgCrossColor};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  transition: stroke ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};
`;

export const Button = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background-color: transparent;
  transition: box-shadow ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};
  cursor: pointer;

  &:active {
    transform: scale(1.01);
  }

  &:hover {
    ${Svg} {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }

  &:focus {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.boxShadow};;
    border-radius: 4px;
    ${Svg} {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;
