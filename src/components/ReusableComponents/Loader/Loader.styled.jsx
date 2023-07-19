import styled from '@emotion/styled';
import { Oval } from 'react-loader-spinner';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;

export const StyledLoader = styled(Oval)`
  height: 70px;
  width: 70px;
  color: ${({ theme }) => theme.colors.accentColor};
`;
