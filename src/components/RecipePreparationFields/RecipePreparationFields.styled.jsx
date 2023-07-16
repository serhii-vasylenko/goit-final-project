import { Field } from 'formik';
import styled from '@emotion/styled';
import { Title } from 'components/RecipeIngredientsFields/RecipeIngredientsFields.styled';

export const TitlePreparation = styled(Title)`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Container = styled.div`
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TextArea = styled(Field)`
  width: 100%;
  height: 154px;
  resize: none;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
    rgba(0, 0, 0, 0.03);
  background-color: rgba(217, 217, 217, 0.157);
  padding: 10px 16px;

  color: #23262a;
  font-family: 'Poppins';
  font-size: 14px;
  letter-spacing: -0.28px;

  &::placeholder {
    color: #000000;
    opacity: 0.5;
  }

  &:focus,
  &:hover {
    outline: 1px solid rgba(217, 217, 217, 1);
  }

  &.error {
    border: 1px solid var(--error-color);
  }

  @media screen and (min-width: 768px) {
    width: 505px;
  height: 224px;
  }
`;
