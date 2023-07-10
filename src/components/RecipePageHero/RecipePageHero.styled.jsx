import styled from '@emotion/styled';

import hero_desk_1 from '../../images/recipePageImg/recipe_hero_desk@1x.jpg';
import hero_desk_2 from '../../images/recipePageImg/recipe_hero_desk@2x.jpg';
import hero_tab_1 from '../../images/recipePageImg/recipe_hero_tab@1x.jpg';
import hero_tab_2 from '../../images/recipePageImg/recipe_hero_tab@2x.jpg';
import hero_mob_1 from '../../images/recipePageImg/recipe_hero_mob@1x.jpg';
import hero_mob_2 from '../../images/recipePageImg/recipe_hero_mob@2x.jpg';

import { ReactComponent as Clock } from '../../images/clock.svg';

export const HeroContainer = styled.div`
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

  @media screen and (min-width: 1440px) {
    width: 1440px;
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

export const HeroTitle = styled.h1`
display: block;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height:  -0.88px;
  color: #8BAA36;
  max-width: 330px;


  @media screen and (min-width: 768px) {
    max-width: 680px;
    font-size: 44px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1000px;
  }
`

export const HeroText = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
  width: 299px;
  margin-bottom: 24px;
  overflow: hidden;

  @media screen and (min-width: 768px){
    width: 506px;
    font-size: 18px;
    line-height: 24px;
  letter-spacing: -0.36px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    width: 656px;
  }
`;

export const CookingTime = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  color: #23262A;
  margin-top: 42px;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  height: 14px;

  @media screen and (min-width: 768px) {
    height: 20px;
    margin-top: 60px;
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 48px;
    line-height: 20px;
  }
`;

export const ClockIcon = styled(Clock)`
  margin-right: 5px;
  stroke: #23262A;
  display: inline-block;
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;