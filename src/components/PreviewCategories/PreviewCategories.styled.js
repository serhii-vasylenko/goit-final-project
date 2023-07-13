import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PreviewCategoriesSection = styled.section`
  padding-top: 64px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 100px;
  }
`;

export const PreviewCategoriesList = styled.ul`
  margin-bottom: 40px;
`;

export const GalleryTitle = styled.h2`
  margin-bottom: 40px;
  color: var(--page-title-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    letter-spacing: -0.88px;
  }
`;

export const SeeCategoryBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  margin-left: auto;
  margin-top: 24px;
  padding: 10px 24px;
  border-radius: 6px;

  color: var(--white-color);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  background-color: var(--accent-color);

  border: none;
  text-decoration: none;

  cursor: pointer;
  transition: color 250ms var(--timing-function);

  &:hover {
    color: var(--background-color-circle);
  }
`;

export const PreviewCategoriesListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 100px;
    }
  }
`;
