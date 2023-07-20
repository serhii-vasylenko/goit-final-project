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
  color: ${({ theme }) => theme.colors.pageTitleColor};
  font-size: ${({ theme }) => theme.fontSizes[28]}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[44]}px;
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

  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes[14]}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[1_3]};
  background-color: ${({ theme }) => theme.colors.accentColor};

  border: none;
  text-decoration: none;

  cursor: pointer;
  transition: ${({ theme }) =>
    `color ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};

  &:hover {
    color: ${({ theme }) => theme.colors.backgroundColorCircle};
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
