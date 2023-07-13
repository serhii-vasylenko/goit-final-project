import styled from '@emotion/styled';

export const RecipeGalleryList = styled.ul`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 14px;
  }
`;
