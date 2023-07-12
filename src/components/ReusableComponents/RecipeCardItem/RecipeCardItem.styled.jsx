import styled from '@emotion/styled/macro';

export const Card = styled.div`
  position: relative;
  padding: 14px 9px;
  background-color: #fff;
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
  min-width: 124px;
  min-height: 124px;
  @media screen and (min-width: 768px) {
    min-width: 228px;
    min-height: 232px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 318px;
    min-height: 324px;
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
  stroke: #000;
`;
export const Trash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  width: 24px;
  height: 24px;
  right: 9px;
  top: 14px; */
  background-color: #ebf3d4;
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
