import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

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
  // console.log('selectedOption :>> ', selectedOption);

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

const StyledFormControl = styled(FormControl)`
  width: 146px;
  borderradius: '6px';

  @media screen and (min-width: 768px) {
    width: 175px;
  }

  @media screen and (min-width: 1440px) {
    width: 198px;
  }
`;

const SelectWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    gap: 18px;
  }
`;

const SelectName = styled.p`
  align-self: center;
  color: #001833;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

const StyledSelect = styled(Select)`
  background-color: #d9d9d9;
  opacity: 0.5;
  text-align: left;
  font-size: 12px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 12px;
  letter-spacing: 0.8;
  opacity: 0.5;

  &&.Mui-selected {
    background-color: transparent;
    &:hover {
      background-color: #d9d9d9;
      opacity: 0.5;
    }
  }
  &:hover {
    background-color: #d9d9d9;
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
