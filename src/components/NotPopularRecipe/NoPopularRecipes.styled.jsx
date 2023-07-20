import styled from '@emotion/styled';
import { Title } from 'components/ReusableComponents/PopularRecipeCard/PopularRecipeCard.styled';

export const Svg = styled.svg`
  width: 100%;
  height: 300px;
  fill: ${({ theme }) => theme.colors.accentColor};
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    width: 319px;
    height: 319px;
  }
`;

export const NoPopularTitle = styled(Title)`
  text-align: center;
`;
