import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, Select, MenuItem } from '@mui/material';

import { selectSearchFilter } from 'redux/recipes/recipesSelector';

const SearchTypeSelector = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(selectSearchFilter);
  const [selectedValue, setSelectedValue] = useState(selectedOption || 'title');

  useEffect(() => {
    if (selectedOption !== null) return;
    if (selectedOption === null) {
      dispatch(selectOption(selectedValue));
    }
  }, [dispatch, selectedOption, selectedValue]);

  const selectOption = selectedOption => ({
    type: 'recipes/setSearchFilter',
    payload: selectedOption,
  });

  const handleChange = e => {
    const value = e.target.value;
    setSelectedValue(value);
    dispatch(selectOption(value));
  };
  console.log('selectedOption :>> ', selectedOption);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select value={selectedValue} name="select" onChange={handleChange}>
        <MenuItem value={'title'}>Title</MenuItem>
        <MenuItem value={'ingredient'}>Ingredients</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SearchTypeSelector;
