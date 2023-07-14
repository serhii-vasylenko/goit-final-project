import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

import MainButton from '../MainButton/MainButton';
import { showMessageToast } from '../ToastCustom/showToast';

import { Input, InputWrapper, ButtonWrapper } from './SearchForm.styled';

import { selectSearchFilter } from 'redux/recipes/recipesSelector';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOption = useSelector(selectSearchFilter);

  // useEffect(() => {
  //   const query = searchParams.get('q');
  //   if (location.pathname === '/search' && query) {
  //     setSearchValue(query);
  //   }
  // }, [location.pathname, searchParams]);
  useEffect(() => {
    if (location.pathname === '/search' && selectedOption === 'title') {
      setSearchParams({ q: searchValue });
    } else if (
      location.pathname === '/search' &&
      selectedOption === 'ingredient'
    ) {
      setSearchParams({ ing: searchValue });
    }
  }, [location.pathname, selectedOption, searchValue, setSearchParams]);

  const handleInputChange = e => {
    const trimmedValue = e.target.value.trim();
    setSearchValue(trimmedValue);
  };


  const handleSubmit = e => {
    e.preventDefault();

    if (searchValue !== '') {
      const path = '/search';
      const query = `?q=${encodeURIComponent(searchValue)}`;

      if (location.pathname === '/main') {
        navigate({ pathname: path, search: query });
      }
      if (location.pathname === '/search' && selectedOption === 'title') {
        setSearchParams({ q: searchValue });
      } else if (
        location.pathname === '/search' &&
        selectedOption === 'ingredient'
      ) {
        setSearchParams({ ing: searchValue });
      }
    }
    if (searchValue === '') {
      setSearchParams({});
      showMessageToast('enter any word in');
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
              cofByMedia1280={{
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
