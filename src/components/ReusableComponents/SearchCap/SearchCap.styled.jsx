import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
`;

export const Text = styled.p`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.selectTextColor};
  font-size: ${({ theme }) => theme.fontSizes[14]}px;
  font-weight: ${({ theme }) => theme.fontWeights.meduim};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  letter-spacing: -0.28px;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: ${({ theme }) => theme.fontSizes[24]}px;
    letter-spacing: -0.48px;
  }
`;
