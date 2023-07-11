import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryItem, Thumb, Title } from './RecipeGalleryItem.styled';

const RecipeGalleryItem = ({ id, src, title, pathTo }) => {
  return (
    <GalleryItem>
      <Link to={`${pathTo}${id}`}>
        <Thumb>
          <img src={src} alt={title} />
          <Title>{title}</Title>
        </Thumb>
      </Link>
    </GalleryItem>
  );
};

export default RecipeGalleryItem;
