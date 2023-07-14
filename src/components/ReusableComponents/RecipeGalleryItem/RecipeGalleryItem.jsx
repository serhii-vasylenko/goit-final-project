import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryItem, Thumb, Title } from './RecipeGalleryItem.styled';

const MAX_TITLE_WORDS = 4;

const RecipeGalleryItem = ({
  id,
  src = 'https://cdn.pixabay.com/photo/2015/08/25/03/50/basil-906137_1280.jpg',
  title,
  marginBottom,
}) => {  
  let displayedTitle = title;

  const titleWords = title.split(' ');
  if (titleWords.length > MAX_TITLE_WORDS) {
    displayedTitle = titleWords.slice(0, MAX_TITLE_WORDS).join(' ') + '...';
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
