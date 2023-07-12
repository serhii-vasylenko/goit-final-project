import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeGallery from 'components/RecipeGallery/RecipeGallery';
import { MainContainer } from 'components/MainContainer/MainContainer';
import {
  PreviewCategoriesList,
  PreviewCategoriesListItem,
} from './PreviewCategories.styled';

import { selectMainPageRecipes } from 'redux/recipes/recipesSelector';
import getMainPageRecipes from 'redux/recipes/operations/getMainPageRecipes';

const PreviewCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectMainPageRecipes);

  useEffect(() => {
    dispatch(getMainPageRecipes());
  }, [dispatch]);

  const filterRecipesByCategory = useCallback(
    category => {
      return categories.filter(recipe => recipe.category === category);
    },
    [categories]
  );

  const breakfastRecipes = filterRecipesByCategory('Breakfast');
  const miscellaneousRecipes = filterRecipesByCategory('Miscellaneous');
  const chickenRecipes = filterRecipesByCategory('Chicken');
  const dessertRecipes = filterRecipesByCategory('Dessert');

  return (
    <section>
      <MainContainer>
        <PreviewCategoriesList>
          <PreviewCategoriesListItem>
            <h2>Breakfast</h2>
            <RecipeGallery category={breakfastRecipes} />
            <Link>See all</Link>
          </PreviewCategoriesListItem>
          <PreviewCategoriesListItem>
            <h2>Miscellaneous</h2>
            <RecipeGallery category={miscellaneousRecipes} />
            <Link>See all</Link>
          </PreviewCategoriesListItem>
          <PreviewCategoriesListItem>
            <h2>Vegan</h2>
            <RecipeGallery category={chickenRecipes} />
            <Link>See all</Link>
          </PreviewCategoriesListItem>
          <PreviewCategoriesListItem>
            <h2>Desserts</h2>
            <RecipeGallery category={dessertRecipes} />
            <Link>See all</Link>
          </PreviewCategoriesListItem>
        </PreviewCategoriesList>
      </MainContainer>
    </section>
  );
};

export default PreviewCategories;
