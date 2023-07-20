import { useDispatch } from 'react-redux';

import SelectCustom from './SelectCustom';
import { SelectWrapper, SelectName } from './SearchTypeSelector.styled';

export const selectOption = selectedOption => {
  return {
    type: 'search/setSearchFilter',
    payload: selectedOption,
  };
};

const SearchTypeSelector = () => {
  const dispatch = useDispatch();

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
