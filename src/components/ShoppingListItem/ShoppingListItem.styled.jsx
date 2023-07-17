import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  width: 343px;
  height: 70px;
  margin-left: auto;
  margin-right: auto;

  &&:not(:last-child) {
    border-bottom: 2px solid #e0e0e0;
  }

  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 140px;
    margin-top: 30px;
  }
  @media screen and (min-width: 1280px) {
    width: 1160px;
    height: 140px;

    margin-top: 40px;
  }
`;

export const ShoppingImageContainer = styled.div`
  padding: 12px;
  background-color: #ebf3d4;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 93px;
    height: 94px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ShoppingImage = styled.img`
  width: 48px;
  height: 48px;

  @media screen and (min-width: 768px) {
    width: 81px;
    height: 81px;
  }
  @media screen and (min-width: 1280px) {
    width: 93px;
    height: 97px;
  }
`;

export const ProductName = styled.p`
  font-size: 10px;
  font-weight: 500;
  font-family: inherit;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const ProductQuantity = styled.div`
  width: 23px;
  height: 23px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  color: #fafafa;

  background-color: #8baa36;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 35px;
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const DeleteBtn = styled.button`
  /* width: 14px; */
  height: 14px;
  stroke: var(--primary-text-color);
  margin-right: 10px;
  margin-left: 60px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;

  @media screen and (min-width: 768px) {
    height: 20px;

    margin-right: 33px;
    margin-left: 80px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 153px;
    margin-right: 10px;
  }
`;

export const CrossIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
`;

export const NumberContainer = styled.div`
  display: flex;

  @media screen and (min-width: 1280px) {
  }
`;
