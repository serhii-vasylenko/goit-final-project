import styled from '@emotion/styled';

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
  align-self: top;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.pageTitleColor};
  font-size: ${({ theme }) => theme.fontSizes[12]}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[1_33]};
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[14]}px;
    padding: 8px 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes[18]}px;
    padding: 6px 0;
  }
`;
