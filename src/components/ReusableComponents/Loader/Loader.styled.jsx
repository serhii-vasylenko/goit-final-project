import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

export const StyledLoader = styled(CircularProgress)`
  display: block;
  margin: 50px auto 0;
  color: var(--accent-color);

  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;
