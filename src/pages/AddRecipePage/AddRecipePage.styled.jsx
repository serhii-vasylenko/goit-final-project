import styled from '@emotion/styled';
import { Title } from 'components/RecipeIngredientsFields/RecipeIngredientsFields.styled';

export const PageTitleWrap = styled.div`
  /* padding-top: 12px; */

  @media (min-width: 768px) {
    /* padding-top: 20px; */
  }
  @media (min-width: 1280px) {
    /* padding-top: 55px; */
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 1280px) {
    display: flex;
  }
`;
export const Container = styled.div`
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding-bottom: 200px;
  }

  @media (min-width: 1280px) {
    padding-top: 100px;
    margin-left: 121px;
  }
`;

export const FormSection = styled.section`
  padding-bottom: 72px;

  @media (min-width: 768px) {
    padding-bottom: 100px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 200px;
  }
`;

export const SectionPopular = styled.section`
`;

export const PopularTitle = styled(Title)`
  margin-bottom: 32px;
`;

export const FollowUsSection = styled.section`
  display: none;
  @media (min-width: 1280px) {
    display: block;
    padding-bottom: 100px;
  }
`;

export const FollowUsTitle = styled(Title)`
  margin-bottom: 40px;
`;
