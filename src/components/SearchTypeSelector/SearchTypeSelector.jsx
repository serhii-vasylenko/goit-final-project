import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SelectCustom from './SelectCustom';
import { SelectWrapper, SelectName } from './SearchTypeSelector.styled';
import { useLocation } from 'react-router';

const SearchTypeSelector = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.from === '/main') {
      return () => {
        dispatch(selectOption('Title'));
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectOption = selectedOption => {
    return {
      type: 'search/setSearchFilter',
      payload: selectedOption,
    };
  };

  const handleOptionChange = value => {
    dispatch(selectOption(value));
  };

  return (
    <>
      <SelectWrapper>
        <SelectName> Search by:</SelectName>
        <SelectCustom
          options={['Title', 'Ingredient']}
          onChange={handleOptionChange}
        />
      </SelectWrapper>
    </>
  );
};

export default SearchTypeSelector;
