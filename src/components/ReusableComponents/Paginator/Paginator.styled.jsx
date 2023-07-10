import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';

export const StyledPaginator = styled(Pagination)`
  display: flex;
  justify-content: center;
  & ul {
    justify-content: center;
    border-radius: 26px;
    box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
    padding: 10px 8px;
  }
  & button {
    color: #656565;
    font-weight: 500;
    &:focus {
      background-color: transparent;
    }
    &:hover {
      background-color: #ebf3d4;
    }

    &.Mui-selected {
      color: black;
      background-color: #ebf3d4;

      &:hover,
      &:focus,
      &:active {
        background-color: #ebf3d4;
      }
    }
  }

  & .MuiTouchRipple-root {
    display: none;
  }
`;
