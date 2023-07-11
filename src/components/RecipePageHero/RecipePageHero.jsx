import React from 'react'

import { HeroContainer, HeroTitle, HeroText, CookingTime , ClockIcon} from './RecipePageHero.styled';
import MainButton from '../ReusableComponents/MainButton/MainButton';

const RecipePageHero = ({title,description, time}) => {
  
 
  return (
    <HeroContainer>
      <HeroTitle>{title}</HeroTitle>
      <HeroText>
        {description}
      </HeroText>
      <MainButton/>
      <CookingTime>
        <ClockIcon/>
        <span>{time} min </span>
      </CookingTime>
    </HeroContainer>
  );  
}

export default RecipePageHero
