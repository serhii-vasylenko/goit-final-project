import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  HeroContainer,
  HeroTitle,
  HeroText,
  Button,
  CookingTime,
  ClockIcon,
} from './RecipePageHero.styled';
import { selectFavoriteRecipes, selectOwnRecipes } from 'redux/recipes/recipesSelector';
import getFavoriteRecipes from 'redux/recipes/operations/getFavoriteRecipes';
import addToFavoriteRecipes from 'redux/recipes/operations/addToFavoriteRecipes';
import deleteFromFavoriteRecipes from 'redux/recipes/operations/deleteFromFavoriteRecipes';

const RecipePageHero = ({ title, description, time }) => {
const { recipeId } = useParams();
  const dispatch = useDispatch();

  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const ownRecipes = useSelector(selectOwnRecipes);

  // console.log(favoriteRecipes);
  //  console.log(ownRecipes);

  useEffect(() => {
    dispatch(getFavoriteRecipes());
  },[dispatch])

  const isFavorite = favoriteRecipes.find(favorite => favorite._id === recipeId);

  const toggleFavorite = async () => {
    try {
      if (!isFavorite) {
       await dispatch(addToFavoriteRecipes(recipeId));
      } else {
       await dispatch(deleteFromFavoriteRecipes(recipeId));
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <HeroContainer>
      <HeroTitle>{title}</HeroTitle>
      <HeroText>{description}</HeroText>
      {favoriteRecipes && ownRecipes && (<Button type="button" onClick={toggleFavorite}>{
        isFavorite ? 'Remove from favorite recipes' : 'Add to favorite recipes'
      }
      </Button>
      )}
      <CookingTime>
        <ClockIcon />
        <span>{time} min </span>
      </CookingTime>
    </HeroContainer>
  );
};

export default RecipePageHero;
