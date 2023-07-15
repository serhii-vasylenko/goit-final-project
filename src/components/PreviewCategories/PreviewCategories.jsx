import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RecipeGallery from 'components/RecipeGallery';
import { MainContainer } from 'components/MainContainer/MainContainer';
import MainButton from 'components/ReusableComponents/MainButton/MainButton';
import Loader from 'components/ReusableComponents/Loader/Loader';
import { showMessageToast } from 'components/ReusableComponents/ToastCustom/showToast';
import ErrorBanner from './ErrorBanner';

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
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getMainPageRecipes());
  }, [dispatch]);

  const recipesByCategories = useMemo(() => {
    const categoriesType = ['Breakfast', 'Miscellaneous', 'Chicken', 'Dessert'];
    let filterRecipesByCategory = [];

    if (categories) {
      categoriesType.forEach(category => {
        const filteredRecipes = categories.filter(
          recipe => recipe.category === category
        );

        filterRecipesByCategory.push({ category, recipes: filteredRecipes });
      });
    } 
    
    if (error){
      showMessageToast('oops...please refresh the page');
    }

    return filterRecipesByCategory;
  }, [categories, error]);

  return (
    <PreviewCategoriesSection>
      <MainContainer>
        {isLoading && <Loader />}
        {!isLoading && error && <ErrorBanner />}
        {!isLoading && categories && !error && (
          <>
            <PreviewCategoriesList>
              {recipesByCategories.map(({ category, recipes }) => (
                <PreviewCategoriesListItem key={category}>
                  <GalleryTitle>{category}</GalleryTitle>
                  <RecipeGallery category={recipes} />
                  <SeeCategoryBtn to={`/categories/${category.toLowerCase()}`}>
                    See all
                  </SeeCategoryBtn>
                </PreviewCategoriesListItem>
              ))}
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
              hoverStyles={{
                styleFirst: 'background-color ',
                styleSecond: 'color',
              }}
              hoverParams={{ paramFirst: '#8BAA36', paramSecond: '#FAFAFA' }}
              focusStyles={{
                styleFirst: 'background-color ',
                styleSecond: 'color',
              }}
              focusParams={{ paramFirst: '#8BAA36', paramSecond: '#FAFAFA' }}
              style={{
                display: 'flex',
                maxWidth: '242px',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderStyle: 'solid',
                fontWeight: '400',
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
