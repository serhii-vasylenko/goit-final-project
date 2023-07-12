import React from 'react';

import RecipeGalleryItem from 'components/ReusableComponents/RecipeGalleryItem/RecipeGalleryItem';
import { RecipeGalleryList } from './RecipeGallery.styled';

const RecipeGallery = ({ category }) => {
  return (
    <RecipeGalleryList>
      {category?.slice(0, 4).map(({ _id: id, title, preview }) => {
        let recipePhoto = '';

        if (preview) {
          recipePhoto = preview;
        } else {
          recipePhoto =
            'https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png';
        }
        return (
          <RecipeGalleryItem key={id} id={id} title={title} src={recipePhoto} />
        );
      })}
    </RecipeGalleryList>
  );
};

export default RecipeGallery;
