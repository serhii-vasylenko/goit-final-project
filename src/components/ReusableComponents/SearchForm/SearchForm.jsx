import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

import MainButton from '../MainButton/MainButton';
import { showMessageToast } from '../ToastCustom/showToast';

import { Input, InputWrapper, ButtonWrapper } from './SearchForm.styled';

import { selectSearchFilter } from 'redux/search/searchSelector';
import getRecipesByTitle from 'redux/search/operations/getRecipesByTitle';
import getRecipesByIngredient from 'redux/search/operations/getRecipesByIngredient';
import {
  resetRecipeByTitle,
  resetRecipeByIngredient,
} from 'redux/search/searchSlice';
import { selectOption } from 'components/SearchTypeSelector/SearchTypeSelector';


const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOption = useSelector(selectSearchFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.state && location.state.from === '/main') {
      const query = searchParams.get('q');
      setSearchValue(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateQueryString = useCallback(() => {
    if (location.pathname === '/search' && searchValue === '') {
      setSearchParams({});
    }

    if (location.pathname === '/search' && searchValue !== '') {
      switch (selectedOption) {
        case 'Title':
          setSearchParams({ q: searchValue });
          break;
        case 'Ingredient':
          setSearchParams({ ing: searchValue });
          break;
        default:
          break;
      }
    }
  }, [location.pathname, searchValue, selectedOption, setSearchParams]);

  useEffect(() => {
    updateQueryString();
  }, [updateQueryString]);

  const handleInputChange = e => {
    const trimvalue = e.target.value.trim();
    setSearchValue(trimvalue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (location.pathname === '/main' && searchValue !== '') {
      dispatch(selectOption('Title'));
      navigate(`/search?q=${searchValue}`, {
        state: { from: '/main' },
      });
      return;
    }

    const params = Object.fromEntries(searchParams.entries());
    const { q, ing } = params;

    const title = searchParams.get('q');
    const ingredient = searchParams.get('ing');

    if (searchValue === '') {
      setSearchParams({});
      showMessageToast('Enter any word in');
      return;
    }

    if (q && q !== '') {
      dispatch(resetRecipeByIngredient());
      dispatch(getRecipesByTitle(title)).then(result => {
        if (
          result.payload.code === 200 &&
          result.payload.data?.recipe?.length === 0
        ) {
          showMessageToast(`On request "${title}" found nothing`);
        }
      });
    }
    if (ing && ing !== '') {
      dispatch(resetRecipeByTitle());
      dispatch(getRecipesByIngredient(ingredient)).then(result => {
        if (
          result.payload.code === 200 &&
          result.payload.data?.recipe?.length === 0
        ) {
          showMessageToast(`On request "${ingredient}" found nothing`);
        }
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            name="search"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Enter the text"
            autoComplete="off"
          />
          <ButtonWrapper>
            <MainButton
              nameButton="Search"
              fontSize="14px"
              padding={{
                paddingTop: '13.3px',
                paddingBottom: '13.3px',
                paddingLeft: '32px',
                paddingRight: '32px',
              }}
              cofByMedia768={{
                font: 1.2,
                padX: 1.02,
                padY: 1.63,
              }}
              cofByMedia1280={{
                font: 1.2,
                padX: 1.54,
                padY: 1.63,
              }}
              bgColor={
                location.pathname === '/'
                  ? 'var(--background-color-circle)'
                  : '#8BAA36'
              }
              hoverStyles={{ styleFirst: 'background-color' }}
              hoverParams={{
                paramFirst:
                  location.pathname === '/'
                    ? '#8BAA36'
                    : 'var(--background-color-circle)',
              }}
            />
          </ButtonWrapper>
        </InputWrapper>
      </form>
    </div>
  );
};

export default SearchForm;
