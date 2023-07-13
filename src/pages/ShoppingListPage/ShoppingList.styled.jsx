import styled from '@emotion/styled';

export const ProductsHead = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 12px 8px 12px 8px;
  background-color: #8baa36;
  border-radius: 8px;

  width: 359px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
   
    font-size: 18px;
    width: 704px;
    height: 58px;
  }
  @media screen and (min-width: 1280px) {
	 padding:18px 35px 18px 35px;
    width: 1240px;
    height: 60px;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }
  @media screen and (min-width: 1280px) {
    gap: 120px;
  }
`;

export const ShoppingList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 14px;
  padding-left: 7px;
  padding-right: 7px;

  font-family: inherit;
  font-size: 10px;
  font-weight: 500;
  

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
