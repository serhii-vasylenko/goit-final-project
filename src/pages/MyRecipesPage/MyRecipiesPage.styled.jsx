import styled from '@emotion/styled';
import PageTitle from 'components/ReusableComponents/PageTitle/PageTitle';

export const Section = styled.section`
  padding: 12px 0 100px;

  @media (min-width: 768px) {
    padding: 20px 0 200px;
  }
  @media (min-width: 1280px) {
    padding: 55px 0 100px;
  }
`;

export const Title = styled(PageTitle)`
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 50px 0 40px;

  @media (min-width: 768px) {
    gap: 40px;
    margin: 100px 0 50px;
  }
  @media (min-width: 1280px) {
    gap: 50px;
  }
`;

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
