import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 320px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;
  @media  (min-width: 375px) {
    width: 375px;
  }
  @media  (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media  (min-width: 1280px) {
    width: 1280px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;
