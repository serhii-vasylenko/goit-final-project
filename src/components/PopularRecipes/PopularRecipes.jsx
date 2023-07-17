import React from 'react';
import { useSelector } from 'react-redux';
import { selectPopularRecipes } from 'redux/recipes/recipesSelector';
import { truncateString } from 'helpers/truncateString';
import { randomSort } from 'helpers/randomSort';
import PopularRecipe from 'components/ReusableComponents/PopularRecipe/PopularRecipeCard';
import { List, Item } from './PopularRecipes.styled';

const PopularRecipes = () => {
  const popularRecipes = useSelector(selectPopularRecipes);
  const recipesForRender = [...popularRecipes].sort(randomSort).slice(0, 4);

  return (
    <List>
      {recipesForRender.map(({ _id, title, description, thumb }) => {
        return (
          <Item key={_id}>
            <PopularRecipe
              _id={_id}
              title={title}
              description={truncateString(description, 100)}
              thumb={thumb}
            />
          </Item>
        );
      })}
    </List>
  );
};

export default PopularRecipes;
