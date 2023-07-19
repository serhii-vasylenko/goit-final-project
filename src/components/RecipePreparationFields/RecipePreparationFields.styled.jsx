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
  outline: none;
  width: 100%;
  height: 154px;
  resize: none;
  border: ${({ theme }) => theme.colors.selectBrdColor};
  border-radius: 6px;
  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
    rgba(0, 0, 0, 0.03);
  background-color: ${({ theme }) => theme.colors.selectBgColor};
  padding: 10px 16px;

  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-family: 'Poppins';
  font-size: 14px;
  letter-spacing: -0.28px;

  caret-color: ${({ theme }) => theme.colors.primaryTextColor};

  transition: box-shadow ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};

  &::placeholder {
    color: ${({ theme }) => theme.colors.fieldPlaceholderColor};
  }

  &:focus,
  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.boxShadow};
    border-radius: 6px;
  }

  &.error {
    box-shadow: 0 0 5px var(--error-color);
    border-radius: 6px;
  }

  @media screen and (min-width: 768px) {
    width: 505px;
    height: 224px;
    font-size: 18px;
  }
`;
