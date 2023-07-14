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

  font-weight: 600;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;

    letter-spacing: -0.5px;
  }
`;