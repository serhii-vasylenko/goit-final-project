import React from 'react';
import {
  Description,
  Image,
  ImageWrapper,
  Info,
  Recipe,
  Title,
} from './PopularRecipeCard.styled';

const PopularRecipe = ({ _id, title, description, thumb }) => {
  return (
    <Recipe to={`/recipes/${_id}`}>
      <ImageWrapper>
        <Image src={thumb} />
      </ImageWrapper>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Recipe>
  );
};

export default PopularRecipe;
