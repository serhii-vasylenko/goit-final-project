import styled from '@emotion/styled';

export const IngredientList = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 96px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 100px;
  }
`;

export const IngredientItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #ebf3d4;
  list-style: none;
  padding: 0 8px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1240px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 29px 14px 14px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    padding: 21px 58px 21px 28px;
  }
  @media screen and (min-width: 1280px) {
    padding: 5px 70px 5px 36px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 40px;
  }

  & img {
    border-radius: 4px;
    width: 65px;
    height: 65px;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      width: 144px;
      height: 146px;
    }
    @media screen and (min-width: 1280px) {
      width: 180px;
      height: 180px;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  max-width: 114px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    max-width: 208px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 547px;
  }
`;

export const NameIngredient = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: #3E4462;
 
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24;
  }
`;

export const IngredientMeasure = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  padding: 4px;
  min-width: 37px;
  max-width: 70px;
  border-radius: 4px;
  background: #8BAA36;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    min-width: 68px;
    max-width: 150px;
    font-size: 18px;
  }
`;

