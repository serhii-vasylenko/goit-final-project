import styled from '@emotion/styled';
import checked from '../../images/icons/pick.svg';

export const ContainerList = styled.section`
  width: 100%;
  margin-bottom: 50px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
    margin-top: 50px;
  }
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  height: 42px;
  width: 100%;
  padding: 0 14px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.accentColor};

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
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: ${({ theme }) => theme.fontSizes[10]}px;
    line-height: ${({ theme }) => theme.lineHeights[1]};
    letter-spacing: 0.3px;

    @media screen and (min-width: 768px) {
      font-size: ${ ({ theme }) => theme.fontSizes[18]}px;
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
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const IngredientItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.categoriesListBGColor};
  padding: 14px 29px 14px 14px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    padding: 33px 58px 33px 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 26px 70px 26px 58px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 66px;
  }
`;

export const ContentWrapMeasure = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 120px;

  @media screen and (min-width: 768px) {
    width: 190px;
  }

  @media screen and (min-width: 1280px) {
    width: 250px;
  }
`;

export const Image = styled.img`
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
`;

export const NameIngredient = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[12]}px;
  line-height: ${ ({ theme }) => theme.lineHeights[1_17]};
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  overflow: hidden;
  width: 145px;

  @media screen and (min-width: 768px) {
    font-size: ${ ({ theme }) => theme.fontSizes[24]}px;
    line-height: ${ ({ theme }) => theme.lineHeights[1_5]};
    width: 206px;
  }

  @media screen and (min-width: 1240px) {
    width: 545px;
  }
`;

export const IngredientMeasure = styled.span`
  display: block;
  background: ${({ theme }) => theme.colors.accentColor};
  border-radius: 4px;
  padding: 4px;
  min-width: 37px;
  max-width: 70px;
  font-weight: ${ ({ theme }) => theme.fontWeights.semibold };
  font-size: ${ ({ theme }) => theme.fontSizes[10]}px;
  line-height: ${ ({ theme }) => theme.lineHeights[1_5]};
  text-align: center;
  color: ${({ theme }) => theme.colors.whiteColor};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-width: 68px;
    max-width: 120px;
    font-size: ${ ({ theme }) => theme.fontSizes[18]}px;
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
  border: ${({ theme }) => theme.borders.checkedIngredientBorder};
  border-radius: 4px;
  position: relative;
  transition: transform;

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }

  &:hover, &:focus {
    transform: scale(1.1)
  }

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
