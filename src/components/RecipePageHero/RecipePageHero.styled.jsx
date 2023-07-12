import styled from '@emotion/styled';

import hero_desk_1 from '../../images/recipePageImg/recipe_hero_desk@1x.jpg';
import hero_desk_2 from '../../images/recipePageImg/recipe_hero_desk@2x.jpg';
import hero_tab_1 from '../../images/recipePageImg/recipe_hero_tab@1x.jpg';
import hero_tab_2 from '../../images/recipePageImg/recipe_hero_tab@2x.jpg';
import hero_mob_1 from '../../images/recipePageImg/recipe_hero_mob@1x.jpg';
import hero_mob_2 from '../../images/recipePageImg/recipe_hero_mob@2x.jpg';


export const recipeHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${hero_mob_1});
  background-repeat: no-repeat;
  width: 100%;
  height: 455px;
  margin-bottom: 32px;
  padding-top: 144px;
  padding-bottom: 90px;
  background-size: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${hero_mob_2});
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    padding-top: 136px;
    padding-bottom: 32px;
    width: 768px;
    height: 495px;
    background-image: url(${hero_tab_1});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${hero_tab_2});
    }
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-top: 164px;
    height: 493px;
    background-image: url(${hero_desk_1});
    
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${hero_desk_2});
    }
  }
`;