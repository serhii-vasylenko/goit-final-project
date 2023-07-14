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

export const EmptyInfo = styled.div`
  margin-top: 50px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;
