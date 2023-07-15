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
`;

export const PhotoFieldWrapper = styled.div`
  width: 279px;
  margin-bottom: 32px;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  height: 268px;
  /* margin-bottom: 32px; */
`;
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImgLabel = styled.label`
  width: 279px;
  height: 268px;
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

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 40px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--input-border-color);

  &.error {
    border-bottom-color: var(--error-color);
  }
`;

export const Input = styled(Field)`
  font-family: 'Poppins';
  font-size: 14px;
  border: none;
  background-color: transparent;
  padding: 0;
  color: #000000;
  height: 100%;
  outline: none;
  padding-top: 23px;
`;

export const FieldLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: #797979;
  pointer-events: none;
`;

// export const SelectField = styled(Field)`
//   position: absolute;
//   top: 0;
//   right: 0;
//   background-color: transparent;
//   border: none;
// `;

export const Select = styled(StyledSelect)`
  position: absolute;
  top: 4px;
  right: 0;
  height: 20px;

  .custom-select {
    
    &__control {
       border: 1px solid black;
      /* border-radius: 6px; */
      box-shadow: none;
      background-color: var(--background-color);
      
       color: #23262a;
      font-size: 12px;
      line-height: 1;
      cursor: text;
    }

    /* &__menu {
      padding: 4px 4px 4px 14px;
    } */

    /* &__menu-is-open {
      border-radius: 6px;
      background: #ffffff;
      box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
        rgba(0, 0, 0, 0.03);
    } */

    &__menu-list {
      height: calc(6 * 18px + 8px);
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
