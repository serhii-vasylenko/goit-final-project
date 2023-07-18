import styled from '@emotion/styled';

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  text-align: center;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  max-width: 210px;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 8px;

  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[18]}px;
  line-height: ${({ theme }) => theme.lineHeights[1_1]};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[24]}px;
    line-height: ${({ theme }) => theme.lineHeights[1]};
  }
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[14]}px;
  line-height: ${({ theme }) => theme.lineHeights[1_3]};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[18]}px;
    letter-spacing: -0.5px;
  }
`;
