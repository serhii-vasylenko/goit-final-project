import styled from '@emotion/styled';

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;

  margin-left: auto;
  margin-right: auto;
  max-width: 206px;

  @media screen and (min-width: 768px) {
    max-width: 428px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 8px;

  font-weight: ${({theme}) => theme.fontWeights.semibold};
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Text = styled.p`
  font-weight: ${({theme}) => theme.fontWeights.regular};
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;

    letter-spacing: -0.5px;
  }
`;

export const Section = styled.section`
  padding-bottom: 100px;
`;
