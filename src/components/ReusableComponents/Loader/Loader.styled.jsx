import styled from '@emotion/styled';
import { Oval } from 'react-loader-spinner';

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const StyledLoader = styled(Oval)`
  flex-grow: 1;
  height: 70px;
  width: 70px;
  color: ${({ theme }) => theme.colors.accentColor};
`;
