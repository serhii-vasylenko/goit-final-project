import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  width: 343px;
  height: 84px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 140px;
    margin-top: 30px;
  }
  @media screen and (min-width: 1280px) {
    width: 1160px;
    margin-top: 40px;
  }
`;

export const ShoppingImageContainer = styled.div`
  padding: 12px;
  background-color: var(--image-background-color);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 93px;
    height: 97px;
    margin-right: 20px;
  }
`;

export const ShoppingImage = styled.img`
  width: 48px;
  height: 48px;

  @media screen and (min-width: 768px) {
    width: 81px;
    height: 81px;
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
  flex-wrap: wrap;
  text-align: center;
  display: inline-block;
  word-break: break-word;
  max-width: 85px;
  max-height: auto;

  border-radius: 5px;
  font-size: 10px;
  padding: 5px;

  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 8px;
    max-width: 150px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 200px;
  }
`;

export const DeleteBtn = styled.button`
  height: 14px;
  margin-right: 10px;
  margin-left: 50px;
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;

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
  stroke: var(--cross-icon-color);

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
  height: fit-content;
`;
