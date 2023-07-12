import styled from '@emotion/styled';

export const Section = styled.section`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 14px;
    column-gap: 100px;
  }
`;
