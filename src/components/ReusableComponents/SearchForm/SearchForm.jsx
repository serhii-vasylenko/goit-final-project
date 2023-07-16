import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

import MainButton from '../MainButton/MainButton';
import { showMessageToast } from '../ToastCustom/showToast';

import { Input, InputWrapper, ButtonWrapper } from './SearchForm.styled';

import { selectSearchFilter } from 'redux/search/searchSelector';
import getRecipesByTitle from 'redux/search/operations/getRecipesByTitle';
import getRecipesByIngredient from 'redux/search/operations/getRecipesByIngredient';
import { resetRecipeByTitle, resetRecipeByIngredient } from 'redux/search/searchSlice';

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
    if (location.pathname === '/search' && searchValue !== '') {
      switch (selectedOption) {
        case 'title':
          setSearchParams({ q: searchValue });
          break;
        case 'ingredient':
          setSearchParams({ ing: searchValue });
          break;
        default:
          break;
      }
    }
    if (searchValue === '') {
      setSearchParams({});
    }
  }, [location.pathname, searchValue, selectedOption, setSearchParams]);

  useEffect(() => {
    updateQueryString();
  }, [updateQueryString]);

  const handleInputChange = e => {
    const trimmedValue = e.target.value.trim();
    setSearchValue(trimmedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = Object.fromEntries(searchParams.entries());
    const { q, ing } = params;

    const title = searchParams.get('q');
    const ingredient = searchParams.get('ing');

    if (searchValue === '') {
      setSearchParams({});
      showMessageToast('enter any word in');
      return;
    }

    if (location.pathname === '/main' && searchValue !== '') {
      navigate(`/search?q=${searchValue}`, {
        state: { from: '/main' },
      });
    }

    if (q && q !== '') {
      dispatch(resetRecipeByIngredient());
       dispatch(getRecipesByTitle(title));
    }
    if (ing && ing !== '') {
      dispatch(resetRecipeByTitle());
      dispatch(getRecipesByIngredient(ingredient));
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
                paddingTop: '13px',
                paddingBottom: '13px',
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
                padX: 1.52,
                padY: 1.63,
              }}
              bgColor={location.pathname === '/' ? '#22252A' : '#8BAA36'}
              hoverStyles={{ styleFirst: 'background-color' }}
              hoverParams={{
                paramFirst: location.pathname === '/' ? '#8BAA36' : '#22252A',
              }}
            />
          </ButtonWrapper>
        </InputWrapper>
      </form>
    </div>
  );
};

export default SearchForm;
