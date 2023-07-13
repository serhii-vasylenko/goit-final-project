import React from 'react';

import {
  HeroContainer,
  HeroTitle,
  HeroText,
  Button,
  CookingTime,
  ClockIcon,
} from './RecipePageHero.styled';


const RecipePageHero = ({ title, description, time }) => {
  return (
    <HeroContainer>
      <HeroTitle>{title}</HeroTitle>
      <HeroText>{description}</HeroText>
      <Button>Add to favorite recipes</Button>
      <CookingTime>
        <ClockIcon />
        <span>{time} min </span>
      </CookingTime>
    </HeroContainer>
  );
};

export default RecipePageHero;
