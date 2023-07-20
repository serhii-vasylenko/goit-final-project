import React, { useState, useLayoutEffect } from 'react';

import RecipeGalleryItem from 'components/ReusableComponents/RecipeGalleryItem';
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
      {category?.slice(0, cardsToShow).map(({ _id: id, title, thumb }) => {
        return (
          <RecipeGalleryItem key={id} id={id} title={title} src={thumb} />
        );
      })}
    </RecipeGalleryList>
  );
};

export default RecipeGallery;
