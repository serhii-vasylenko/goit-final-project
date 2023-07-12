import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryItem, Thumb, Title } from './RecipeGalleryItem.styled';

const RecipeGalleryItem = ({ id, src, title }) => {
  return (
    <GalleryItem>
      <Link to={`/recipes${id}`}>
        <Thumb>
          <img src={src} alt={title} />
          <Title>{title}</Title>
        </Thumb>
      </Link>
    </GalleryItem>
  );
};

export default RecipeGalleryItem;
