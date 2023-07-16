import styled from '@emotion/styled';
import { FormControl, Select, MenuItem } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  width: 146px;
  borderradius: '6px';

  @media screen and (min-width: 768px) {
    width: 175px;
  }

  @media screen and (min-width: 1280px) {
    width: 198px;
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    gap: 18px;
  }
`;

export const SelectName = styled.p`
  align-self: center;
  color: var(--page-title-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const StyledSelect = styled(Select)`
  background-color: #d9d9d9;
  opacity: 0.5;
  text-align: left;
  font-size: 12px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
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
