import styled from '@emotion/styled';

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  height: 42px;
  padding: 0 14px;
  margin-bottom: 24px;
  color: #FAFAFA;
  background-color: #8BAA36;

  @media screen and (min-width: 768px) {
    height: 58px;
    padding: 0 32px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    height: 60px;
    padding: 0 40px;
    margin-bottom: 50px;
  }

  p {
    font-weight:600;
    font-size: 10px;
    line-height: normal;
    letter-spacing: 0.3px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
       letter-spacing: 0.54px;
    }
  }

  span {
    margin-left: 16px;

    @media screen and (min-width: 768px) {
      margin-left: 38px;
    }
    @media screen and (min-width: 1280px) {
      margin-left: 109px;
    }
  }
`;
