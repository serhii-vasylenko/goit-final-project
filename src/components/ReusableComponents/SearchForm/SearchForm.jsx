import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

import MainButton from '../MainButton/MainButton';

import { Input, InputWrapper, ButtonWrapper } from './SearchForm.styled';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

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
      } else if (location.pathname === '/search')
        setSearchParams({ query: trimmedValue });
    }
    console.log('searchValue :>> ', trimmedValue);

    //   axios.get(`/api/search${query}`)
    // .then(response => { console.log(response.data) })
    // .catch(error => { console.log(error.message) });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
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
