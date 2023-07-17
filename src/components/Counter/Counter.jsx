import { Container, Button, Span, Svg, Wrap } from './Counter.styled';
import sprite from '../../images/AddRecipePage/sprite.svg';

const Counter = ({ remove, push, ingredients }) => {
  return (
    <Container>
      <Wrap>
        <Button
          type="button"
          onClick={() => {
            if (ingredients.length > 1) {
              remove(ingredients.length - 1);
            }
          }}
        >
          <Svg width={14} height={14}>
            <use href={`${sprite}#minus`}></use>
          </Svg>
        </Button>
        <Span>{ingredients.length}</Span>
        <Button type="button" onClick={() => push({ id: '', measure: '' })}>
          <Svg width={14} height={14}>
            <use href={`${sprite}#plus`}></use>
          </Svg>
        </Button>
      </Wrap>
    </Container>
  );
};

export default Counter;
