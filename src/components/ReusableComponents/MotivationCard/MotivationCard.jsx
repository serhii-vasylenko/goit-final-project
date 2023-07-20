import React from 'react';
import sprite from '../../../images/sprite.svg';
import { randomImage } from 'helpers/randomBgImg';
import {
  Accent,
  Bg,
  Button,
  ButtonWrapper,
  Card,
  Content,
  Text,
} from './MotivationCard.styled';


const MotivationCard = ({ text, onCloseHandler }) => {
  return (
    <Card backgroundImage={`url(${randomImage()})`}>
      <Bg fill="none">
        <use href={`${sprite}#motivation-bg`}></use>
      </Bg>
      <Content>
        <Text>
          <Accent>Wow! </Accent>
          {text}
        </Text>
        <ButtonWrapper onClick={onCloseHandler}>
          <Button fill="none">
            <use href={`${sprite}#motivation-close`}></use>
          </Button>
        </ButtonWrapper>
      </Content>
    </Card>
  );
};

export default MotivationCard;
