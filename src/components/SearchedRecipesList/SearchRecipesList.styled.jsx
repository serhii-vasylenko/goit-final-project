import styled from '@emotion/styled';

export const Section = styled.section`
  text-align: center;
  padding-top: 22px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 45px;
  }
`;


export const List = styled.ul`
  align-items: center;
  margin-bottom: 50px;
  li {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    li {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 100px;
    column-gap: 14px;
  }
`;
