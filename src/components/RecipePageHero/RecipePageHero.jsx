import React from 'react'

import { HeroContainer, HeroTitle, HeroText, CookingTime , ClockIcon} from './RecipePageHero.styled';
import MainButton from '../ReusableComponents/MainButton/MainButton';


const RecipePageHero = ({recipeData, recipe_id}) => {

  const { title, time } = recipeData;

  return (
    <HeroContainer>
      <HeroTitle>Salmon Avocado Salad</HeroTitle>
      <HeroText>
        Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
        pan seared salmon is layered on top of spinach, avocado, tomatoes, and
        red onions. Then drizzled with a homemade lemon vinaigrette.
      </HeroText>
      <MainButton/>
      <CookingTime>
        <ClockIcon/>
        <span>20 min</span>
      </CookingTime>
    </HeroContainer>
  );  
}

export default RecipePageHero
