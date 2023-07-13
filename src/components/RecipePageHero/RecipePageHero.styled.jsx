import styled from '@emotion/styled';

import hero_desk_1 from '../../images/recipePageImg/recipe_hero_desk@1x.jpg';
import hero_desk_2 from '../../images/recipePageImg/recipe_hero_desk@2x.jpg';
import hero_tab_1 from '../../images/recipePageImg/recipe_hero_tab@1x.jpg';
import hero_tab_2 from '../../images/recipePageImg/recipe_hero_tab@2x.jpg';
import hero_mob_1 from '../../images/recipePageImg/recipe_hero_mob@1x.jpg';
import hero_mob_2 from '../../images/recipePageImg/recipe_hero_mob@2x.jpg';

import { ReactComponent as Clock } from '../../images/clock.svg';

export const HeroContainer = styled.div`
  background-image: url(${hero_mob_1});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 455px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -61px;
  margin-bottom: 32px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${hero_mob_2});
  }

  @media screen and (min-width: 768px) {
    height: 495px;
    margin-bottom: 50px;
    background-image: url(${hero_tab_1});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${hero_tab_2});
    }
  }

  @media screen and (min-width: 1280px) {
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
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 18px;
  margin-top: 80px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #8baa36;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 1;
    margin-bottom: 24px;
    margin-top: 72px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 100px;
  }
`;

export const HeroText = styled.p`
  color: #23262a;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  margin-bottom: 24px;
  width: 303px;

  @media screen and (min-width: 768px) {
    width: 506px;
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    width: 656px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  font-size: 10px;
  line-height: 1.5;
  padding: 10px 18px;
  color: #22252a;
  margin-bottom: 42px;
  cursor: pointer;
  /* transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 330px;
    margin-bottom: 60px;
    padding: 18px 44px;
    border: 2px solid #8baa36;
  }

  @media only screen and (min-width: 1280px) {
    margin-bottom: 48px;
  }

  &:hover,
  &:focus {
    background-color: #8baa36;
    color: #fafafa;
  }
`;


export const CookingTime = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  color: #23262A;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  height: 14px;

  @media screen and (min-width: 768px) {
    height: 20px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
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
