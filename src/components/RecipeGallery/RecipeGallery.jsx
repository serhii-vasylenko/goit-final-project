import React, { useState, useLayoutEffect } from 'react';

import RecipeGalleryItem from 'components/ReusableComponents/RecipeGalleryItem/RecipeGalleryItem';
import { RecipeGalleryList } from './RecipeGallery.styled';

const RecipeGallery = ({ category }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cardsToShow = calculateCardsToShow(windowWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateCardsToShow(width) {
    if (width < 768) {
      return 1;
    } else if (width >= 768 && width < 1280) {
      return 2;
    } else {
      return 4;
    }
  }

  return (
    <RecipeGalleryList>
      {category?.slice(0, cardsToShow).map(({ _id: id, title, preview }) => {
        return (
          <RecipeGalleryItem key={id} id={id} title={title} src={preview} />
        );
      })}
    </RecipeGalleryList>
  );
};

export default RecipeGallery;
