import styled from '@emotion/styled';

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.errorColor};
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
