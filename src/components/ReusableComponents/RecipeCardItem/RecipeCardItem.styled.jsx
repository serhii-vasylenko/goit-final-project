import styled from '@emotion/styled/macro';

export const Card = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 14px 9px;
  background-color: ${({ theme }) => theme.colors.recipeCardBgColor};
  display: flex;
  gap: 14px;
  @media screen and (min-width: 768px) {
    padding: 28px 24px;
    gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 40px;
    gap: 40px;
  }
`;
export const ImageContainer = styled.div`
  border-radius: 8px;
  flex-shrink: 0;
  width: 124px;
  height: 124px;
  @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  }
  @media screen and (min-width: 1280px) {
    width: 318px;
    height: 324px;
  }
`;
export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
  }
`;
export const TrashIcon = styled.svg`
  stroke: ${({ theme }) => theme.colors.recipeCardDeleteColor};
  transition: stroke var(--transition-duration) var(--timing-function);
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;
export const Trash = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.recipeCardDeleteBgColor};
  transition: background-color var(--transition-duration) var(--timing-function);
  cursor: pointer;
  &:hover {
    background-color: #8baa36;
    ${TrashIcon} {
      stroke: #fff;
    }
  }

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
    right: 28px;
    top: 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 44px;
    height: 44px;
    right: 40px;
    top: 40px;
  }
`;
export const Description = styled.p`
  font-size: 8px;
  width: calc(100% - 24px);
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.recipeCardDescriptionColor};
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: calc(100% - 50px);
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
    width: 100%;
  }
`;
export const Time = styled.span`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;
export const FlexContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
