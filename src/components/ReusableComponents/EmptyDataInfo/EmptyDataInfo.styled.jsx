import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 50px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;

export const Text = styled.p`
  margin-top: 24px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.28px;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
    letter-spacing: -0.48px;
  }
`;
