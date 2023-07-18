import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import {
  PositionWrapper,
  StyledFormControl,
  StyledSelect,
  StyledMenuItem,
  OptionWrapper,
} from './SelectCustom.styled';

const SelectCustom = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

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
