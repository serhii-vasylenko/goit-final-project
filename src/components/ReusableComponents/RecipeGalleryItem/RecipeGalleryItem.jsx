import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryItem, Thumb, Title } from './RecipeGalleryItem.styled';

const MAX_TITLE_LENGTH = 25;

const RecipeGalleryItem = ({
  id,
  src = 'https://cdn.pixabay.com/photo/2015/08/25/03/50/basil-906137_1280.jpg',
  title,
}) => {  
  let displayedTitle = title;

  if (title.length > MAX_TITLE_LENGTH) {
    displayedTitle = `${title.slice(0, MAX_TITLE_LENGTH)}...`;
  }

  return (
    <GalleryItem>
      <Link to={`/recipes/${id}`}>
        <Thumb>
          <img src={src} alt={title} />
          <Title>{displayedTitle}</Title>
        </Thumb>
      </Link>
    </GalleryItem>
  );
};

export default RecipeGalleryItem;
