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
  color: ${({theme}) => theme.colors.selectTextColor}
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
