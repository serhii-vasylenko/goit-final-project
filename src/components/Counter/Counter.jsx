import { Container, Button, Span, SVG, Wrap } from './Counter.styled';
import sprite from '../../images/AddRecipePage/sprite.svg';

const Counter = ({ pop, push, ingredients }) => {
  return (
    <Container>
        <Wrap>
      <Button type="button" onClick={() => pop({ id: '', measure: '' })}>
        <SVG width={14} height={14}>
          <use href={`${sprite}#minus`}></use>
        </SVG>
      </Button>
      <Span>{ingredients.length}</Span>
      <Button type="button" onClick={() => push({ id: '', measure: '' })}>
        <SVG width={14} height={14}>
          <use href={`${sprite}#plus`}></use>
        </SVG>
      </Button>
      </Wrap>
    </Container>
  );
};

export default Counter;
