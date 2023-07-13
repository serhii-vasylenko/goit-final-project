import React, { useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import RecipeGallery from 'components/RecipeGallery/RecipeGallery';
import { MainContainer } from 'components/MainContainer/MainContainer';
import MainButton from 'components/ReusableComponents/MainButton/MainButton';
import ErrorBanner from './ErrorBanner/ErrorBanner';

import {
  PreviewCategoriesSection,
  GalleryTitle,
  PreviewCategoriesList,
  PreviewCategoriesListItem,
  SeeCategoryBtn,
} from './PreviewCategories.styled';

import {
  selectMainPageRecipes,
  selectIsLoading,
  selectError,
} from 'redux/recipes/recipesSelector';
import getMainPageRecipes from 'redux/recipes/operations/getMainPageRecipes';

const PreviewCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectMainPageRecipes);
  const navigate = useNavigate()
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
    <PreviewCategoriesSection>
      <MainContainer>
        {isLoading && <p>LOADING....</p>}
        {!isLoading && !categories && <ErrorBanner />}
        {!isLoading && categories && !error && (
          <>
            <PreviewCategoriesList>
              <PreviewCategoriesListItem>
                <GalleryTitle>Breakfast</GalleryTitle>
                <RecipeGallery category={breakfastRecipes} />
                <SeeCategoryBtn to={'/categories/breakfast'}>
                  See all
                </SeeCategoryBtn>
              </PreviewCategoriesListItem>
              <PreviewCategoriesListItem>
                <GalleryTitle>Miscellaneous</GalleryTitle>
                <RecipeGallery category={miscellaneousRecipes} />
                <SeeCategoryBtn to={'/categories/miscellaneous'}>
                  See all
                </SeeCategoryBtn>
              </PreviewCategoriesListItem>
              <PreviewCategoriesListItem>
                <GalleryTitle>Chicken</GalleryTitle>
                <RecipeGallery category={chickenRecipes} />
                <SeeCategoryBtn to={'/categories/chicken'}>
                  See all
                </SeeCategoryBtn>
              </PreviewCategoriesListItem>
              <PreviewCategoriesListItem>
                <GalleryTitle>Desserts</GalleryTitle>
                <RecipeGallery category={dessertRecipes} />
                <SeeCategoryBtn to={'/categories/dessert'}>
                  See all
                </SeeCategoryBtn>
              </PreviewCategoriesListItem>
            </PreviewCategoriesList>
            <MainButton
              nameButton="Other categories"
              fontSize="14px"
              bgColor="transparent"
              color={'#22252a'}
              border="2px"
              borderColor={'#8aa936'}
              borderRadius="24px 44px"
              padding={{
                paddingTop: '14px',
                paddingBottom: '14px',
                paddingLeft: '32px',
                paddingRight: '32px',
              }}
              cofByMedia768={{ font: 1.14, padX: 1.43, padY: 1.625 }}
              cofByMedia1280={{ font: 1.14, padX: 1.43, padY: 1.625 }}
              hoverStyles={{ styleFirst: 'background-color ' }}
              hoverParams={{ paramFirst: '#8BAA36' }}
              style={{
                fontFamily: 'inherit',
                borderStyle: 'solid',
                fontWeight: '400'
              }}
              onClick={() => navigate('/categories/beef')}
            />
          </>
        )}
      </MainContainer>
    </PreviewCategoriesSection>
  );
};

export default PreviewCategories;
