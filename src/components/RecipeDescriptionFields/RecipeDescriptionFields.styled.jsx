import styled from '@emotion/styled/macro';
import { Field } from 'formik';
import ReactSelect from 'react-select';

export const DescriptionFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 67px;
  padding-top: 97px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 104px;
  }
`;

export const PhotoFieldWrapper = styled.div`
  margin-bottom: 32px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-right: 32px;
    margin-bottom: 0;
  }

  transition: scale ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};

  &:focus,
  &:hover {
    scale: 1.01;
  }
`;

export const ImgWrapper = styled.div`
  width: 279px;
  height: 268px;

  transition: box-shadow ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};

  @media screen and (min-width: 1280px) {
    width: 357px;
    height: 344px;
  }

  &.error {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.errorColor};
    border-radius: 8px;
  }
`;

export const ImgLabel = styled.label``;

export const InputFileThumb = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.colors.accentColor};
  border-radius: 8px;
  cursor: pointer;

  &:active {
    transform: scale(1.01);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 1280px) {
    width: 393px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorderColor};

  transition: box-shadow ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};

  :not(:last-child) {
    margin-bottom: 24px;
  }

  &:focus,
  &:hover {
    box-shadow: 0 5px 5px -5px ${({ theme }) => theme.colors.boxShadow};
  }

  &.error {
    box-shadow: 0 5px 5px -5px ${({ theme }) => theme.colors.errorColor};
  }

  @media screen and (min-width: 768px) {
    height: 43px;
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    :not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export const Input = styled(Field)`
  font-family: 'Poppins';
  font-size: 12px;
  border: none;
  background-color: transparent;
  padding: 0;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  height: 100%;
  outline: none;
  padding-top: 23px;
  
  caret-color: ${({ theme }) => theme.colors.primaryTextColor};
  

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FieldLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.formLabelColor};
  pointer-events: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Select = styled(ReactSelect)`
  position: absolute;
  top: 4px;
  right: 0;
  
  .custom-select {
    &__control {
      box-shadow: none;
      background-color: transparent;
      border: none;
      min-height: 20px;
      min-width: 87px;
      font-size: 12px;
      line-height: 1;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        ${FieldContainer} {
          box-shadow: 0 5px 5px -5px ${({ theme }) => theme.colors.boxShadow};
        }
      }
      
      &:hover,
      &--is-focused {
       box-shadow: 0 0 5px ${({ theme }) => theme.colors.boxShadow};
        border-radius: 6px;
      }

      @media screen and (min-width: 768px) {
        font-size: 14px;
        min-width: 94px;
      }
    }

    &__input-container {
      padding: 1px;
      margin: 0;
    }

    &__menu {
      font-size: 12px;
      padding: 4px 4px 4px 14px;
      margin: 0;
      width: 123px;
      top: 28px;
      right: 0px;
      box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
        rgba(0, 0, 0, 0.03);
      border: none;
      border-radius: 6px;
      background-color: ${({ theme }) => theme.colors.menuBgColor};
      color: ${({ theme }) => theme.colors.formLabelColor};
      
      
      @media screen and (min-width: 768px) {
        width: 132px;
        font-size: 14px;
      }
    }

    &__menu-list {
      height: calc(6 * 22px + 2px);
      
      @media screen and (min-width: 768px) {
        height: calc(6 * 27px);
      }
    }

    &__placeholder {
      color: ${({ theme }) => theme.colors.selectPlaceholder};
    }
    
    &__value-container {
      padding: 0px 8px;
    }

    &__single-value {
      color: ${({ theme }) => theme.colors.formLabelColor};
      line-height: 1;
      letter-spacing: -0.28px;
    }

    &__option {
      font-size: 12px;
      padding: 3px 0;
      margin-bottom: 4px;
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
      padding: 0;
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
