import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RecipeGallery from 'components/RecipeGallery';
import { MainContainer } from 'components/MainContainer/MainContainer';
import MainButton from 'components/ReusableComponents/MainButton/MainButton';
import Loader from 'components/ReusableComponents/Loader';
import showMessageToast from 'components/ReusableComponents/ToastCustom/ToastCustom';
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
import { selectTheme } from 'redux/theme/selectors';

const PreviewCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectMainPageRecipes);
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const stateTheme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(getMainPageRecipes());
  }, [dispatch]);

  const recipesByCategories = useMemo(() => {
    const categoriesType = ['Breakfast', 'Miscellaneous', 'Chicken', 'Dessert'];
    let filterRecipesByCategory = [];

    categoriesType.forEach(category => {
      filterRecipesByCategory.push({ category, recipes: [] });
    });

    if (categories) {
      categories.forEach(recipe => {
        const categoryIndex = categoriesType.indexOf(recipe.category);
        if (categoryIndex !== -1) {
          filterRecipesByCategory[categoryIndex].recipes.push(
            ...recipe.recipes
          );
        }
      });
    } else {
      showMessageToast('oops...something went wrong');
    }

    return filterRecipesByCategory;
  }, [categories]);

  return (
    <PreviewCategoriesSection>
      <MainContainer>
        {isLoading && <Loader />}
        {!isLoading && !categories && <ErrorBanner />}
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
              border="2px"
              borderColor={'#8aa936'}
              textColor={stateTheme === 'light' ? '#22252a' : '#fafafa'}
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
