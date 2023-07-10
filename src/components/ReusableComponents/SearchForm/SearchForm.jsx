import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

import MainButton from '../MainButton/MainButton';

import { Input, InputWrapper, ButtonWrapper } from './SearchForm.styled';

import { selectSearchFilter } from 'redux/recipes/recipesSelector';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOption = useSelector(selectSearchFilter);

  useEffect(() => {
    const query = searchParams.get('query');
    if (location.pathname === '/search' && query) {
      setSearchValue(query);
    }
  }, [location.pathname, searchParams]);

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedValue = searchValue.trim();

    if (trimmedValue !== '') {
      const path = '/search';
      const query = `?query=${encodeURIComponent(trimmedValue)}`;

      if (location.pathname === '/') {
        navigate({ pathname: path, search: query });
      }
      if (
        location.pathname === '/search' &&
        selectedOption === 'title'
      ) {
        setSearchParams({ query: trimmedValue });
      } else if (
        location.pathname === '/search' &&
        selectedOption === 'ingredient'
      ) {
        setSearchParams({ ingredient: trimmedValue });
      }
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
          />
          <ButtonWrapper>
            <MainButton
              nameButton="Search"
              fontSize="14px"
              padding={{
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                paddingRight: '32px',
              }}
              cofByMedia768={{
                font: 1.2,
                padX: 1.02,
                padY: 1.63,
              }}
              cofByMedia1440={{
                font: 1.2,
                padX: 1.46,
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
