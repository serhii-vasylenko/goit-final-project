import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectMainPageRecipes } from 'redux/recipes/recipesSelector';
import getMainPageRecipes from 'redux/recipes/operations/getMainPageRecipes';

const PreviewCategories = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const categories = useSelector(selectMainPageRecipes);

  useEffect(() => {
    dispatch(getMainPageRecipes());
  }, [dispatch]);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filterRecipesByCategory = useCallback((category) => {
    return categories.filter((recipe) => recipe.category === category);
  }, [categories]);

  const breakfastRecipes = filterRecipesByCategory('Breakfast');
  const miscellaneousRecipes = filterRecipesByCategory('Miscellaneous');
  const chickenRecipes = filterRecipesByCategory('Chicken');
  const dessertRecipes = filterRecipesByCategory('Dessert');

  return (
    <section>
      <ul>
        <li>
          <h2>Breakfast</h2>
          <Link>See all</Link>
        </li>
        <li>
          <h2>Miscellaneous</h2>
          <Link>See all</Link>
        </li>
        <li>
          <h2>Vegan</h2>
          <Link>See all</Link>
        </li>
        <li>
          <h2>Desserts</h2>
          <Link>See all</Link>
        </li>
      </ul>
      
    </section>
    
  );
};

export default PreviewCategories;
