import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  margin-bottom: ${props => props.marginBottom || '0px'};
  border-radius: 8px;
  overflow: hidden;
  transform: scale(1);
  transition: ${({ theme }) => theme.transforms.all};

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    flex-basis: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 42px) / 4);
  }

  &:focus,
  &:hover {
    transform: scale(1.05);
  }

  &:focus h3,
  &:hover h3 {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const Thumb = styled.div`
  position: relative;
  height: 323px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h3`
  position: absolute;
  min-width: 270px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 26px;
  padding: 16px;

  font-size: ${({ theme }) => theme.fontSizes[16]}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.meduim};
  line-height: ${({ theme }) => theme.lineHeights[1_25]};
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  background-color: ${({ theme }) => theme.colors.recipeCardBgColor};
  border-radius: 8px;

  @media screen and (min-width: 375px) {
    min-width: 307px;
  }

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 268px;
  }
`;
