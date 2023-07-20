import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { selectSearchFilter } from 'redux/search/searchSelector';

import {
  PositionWrapper,
  StyledFormControl,
  StyledSelect,
  StyledMenuItem,
  OptionWrapper,
} from './SelectCustom.styled';
import { useSelector } from 'react-redux';

const SelectCustom = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const chosenOption = useSelector(selectSearchFilter);

  useEffect(() => {
    if (chosenOption !== '') {
      setSelectedOption(chosenOption);
    }
  }, [chosenOption]);

  const handleSelect = option => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <PositionWrapper>
      <StyledFormControl onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <IoIosArrowDown />
      </StyledFormControl>
      {isOpen && (
        <OptionWrapper>
          <StyledSelect>
            {options.map(option => (
              <StyledMenuItem key={option} onClick={() => handleSelect(option)}>
                {option}
              </StyledMenuItem>
            ))}
          </StyledSelect>
        </OptionWrapper>
      )}
    </PositionWrapper>
  );
};

export default SelectCustom;
