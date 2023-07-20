import React from 'react';
import { Item, Link, List, Navigation } from './Nav.styled';
import { useDispatch } from 'react-redux';
import { selectOption } from 'components/SearchTypeSelector/SearchTypeSelector';

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Navigation>
        <List>
          <Item>
            <Link
              onClick={() => dispatch(selectOption('Ingredient'))}
              to={'/search'}
            >
              Ingredients
            </Link>
          </Item>
          <Item>
            <Link to={'/add'}>Add recipes</Link>
          </Item>
          <Item>
            <Link to={'/my'}>My recipes</Link>
          </Item>
          <Item>
            <Link to={'/favorite'}>Favorite</Link>
          </Item>
          <Item>
            <Link to={'/shopping-list'}>Shopping list</Link>
          </Item>
        </List>
      </Navigation>
    </>
  );
};

export default Nav;
