import styled from '@emotion/styled';
import checked from '../../images/pick.svg';

export const ContainerList = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 50px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    margin-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
    padding-right: 0;
    margin-top: 100px;
  }
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  height: 42px;
  width:100%;
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


export const IngredientList = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
width:100%;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
  /* @media screen and (min-width: 1280px) {
    margin-bottom: 100px;
  } */
`;

export const IngredientItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #ebf3d4;
  padding: 10px;
  gap: 8px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
     padding: 16px 24px;
  }

  @media screen and (min-width: 1280px) {
   padding: 26px 32px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 78px;
    &:first-of-type {
      gap: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 151px;
    &:first-of-type {
      gap: 40px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 65px;
  height: 65px;

  @media screen and (min-width: 768px) {
    width: 144px;
    height: 146px;
  }

  @media screen and (min-width: 1440px) {
    width: 180px;
    height: 180px;
  }

  & img {
    border-radius: 4px;
    display: block;
   object-fit: contain;
  }
`;

export const NameIngredient = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;
  color: #3e4462;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const IngredientMeasure = styled.span`
  display: block;
  background: #8baa36;
  border-radius: 4px;
  padding: 4px;
  min-width: 37px;
  max-width: 70px;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    min-width: 68px;
    max-width: 150px;
    font-size: 18px;
    line-height: 27px;
  }

  @media screen and (min-width: 1280px) {
    padding: 4px 8px;
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    border: 2px solid rgba(126, 126, 126, 0.5);
  }

  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  position: relative;

  &:checked::after {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background-image: url(${checked});
    background-size: 10px, 10px;
    background-repeat: no-repeat;
    background-position: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 768px) {
      width: 35px;
      height: 35px;
      background-size: 17px, 17px;
    }
  }
`;

