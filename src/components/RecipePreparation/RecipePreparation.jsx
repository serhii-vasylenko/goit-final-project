import React from 'react';
import { nanoid } from 'nanoid';

import imagePlaceHolder from '../../images/recipePageImg/recipe_tab@1x-min.jpg'
import {
  Container,
  Title,
  InstructionsList,
  ListItem,
  GreenCircle,
  ImageWrapper,
  ImageRecipe,
} from './RecipePreparation.styled';

const RecipePreparation = ({ instructions, image }) => {

   let instructionsString = instructions.toString();
   let res = instructionsString.split('\n');

   console.log(res);

  for (let i = 0; i < res.length; i += 1) {
    const regex = /^(?:\d+[.)]*\s*)*/;
    res[i] = res[i].replace(regex, '').trim();
  }
  const filteredInstructions = res.filter(str => str !== '');

   console.log(filteredInstructions);

  return (
    <Container>
      <div>
        <Title>Recipe Preparation</Title>
        <InstructionsList>
          {filteredInstructions?.map((item, index) => (
            <ListItem key={nanoid()}>
              <GreenCircle>{index + 1}</GreenCircle>
              {item}
            </ListItem>
          ))}
        </InstructionsList>
      </div>
      <ImageWrapper>
        <ImageRecipe
          src={image ?? imagePlaceHolder}
          alt="cooked meal"
        ></ImageRecipe>
      </ImageWrapper>
    </Container>
  );
}

export default RecipePreparation
