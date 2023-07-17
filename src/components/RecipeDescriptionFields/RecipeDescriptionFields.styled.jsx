import styled from '@emotion/styled';
import { Field } from 'formik';
import { StyledSelect } from 'components/RecipeIngredientsFields/RecipeIngredientsFields.styled';

export const DescriptionFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 67px;
  padding-top: 97px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 104px;
  }
`;

export const PhotoFieldWrapper = styled.div`
  margin-bottom: 32px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-right: 32px;
    margin-bottom: 0;
  }
`;

export const ImgWrapper = styled.div`
  width: 279px;
  height: 268px;

  @media screen and (min-width: 1280px) {
    width: 357px;
    height: 344px;
  }
`;


export const ImgLabel = styled.label`
  /* width: 279px;
  height: 268px; */
`;

export const InputFileThumb = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: var(--accent-color);
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
  border-bottom: 1px solid var(--input-border-color);

  :not(:last-child) {
    margin-bottom: 24px;
  }

  &.error {
    border-bottom-color: var(--error-color);
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
  color: #000000;
  height: 100%;
  outline: none;
  padding-top: 23px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FieldLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: #797979;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Select = styled(StyledSelect)`
  position: absolute;
  top: 4px;
  right: 0;

  .custom-select {
    &__control {
      box-shadow: none;
      background-color: var(--background-color);
      min-height: 20px;
      min-width: 87px;
      font-size: 12px;
      line-height: 1;
      cursor: pointer;
      font-weight: 500;

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
      width: 123px;
      top: 15px;
      right: 5px;

      padding: 4px 4px 4px 14px;
    }

    &__menu-is-open {
    }

    &__menu-list {
      height: calc(6 * 18px + 8px);

      /* @media screen and (min-width: 768px) {
        height: calc(6 * 22px + 20px);
      } */
    }
    &__value-container {
      padding: 0px 8px;
    }
    &__option {
      margin: 4px 0;
    }

    &__indicator {
      padding: 0;
    }
  }
`;
