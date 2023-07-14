import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import { selectSearchFilter } from 'redux/recipes/recipesSelector';

import {
  StyledFormControl,
  SelectWrapper,
  SelectName,
  StyledSelect,
  StyledMenuItem,
} from './SearchTypeSelector.styled';

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

  return (
    <>
      <SelectWrapper>
        <SelectName> Search by:</SelectName>
        <StyledFormControl
          sx={{
            m: 1,
            minWidth: 120,
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          size="small"
          margin="normal"
          focused={false}
        >
          <StyledSelect
            value={selectedValue}
            name="select"
            onChange={handleChange}
            IconComponent={props => (
              <KeyboardArrowDown sx={{ fill: '#8BAA36' }} {...props} />
            )}
          >
            <StyledMenuItem value="title">Title</StyledMenuItem>
            <StyledMenuItem value="ingredient">Ingredients</StyledMenuItem>
          </StyledSelect>
        </StyledFormControl>
      </SelectWrapper>
    </>
  );
};

export default SearchTypeSelector;
