import styled from '@emotion/styled';

export const Title = styled.h1`
  color: var(--page-title-color);
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.56px;
  padding-top: 35px;
  padding-bottom: 3px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    letter-spacing: -0.64px;
    padding-bottom: 6px;
    padding-top: 46px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    letter-spacing: -0.88px;
    padding-top: 44px;
  }
`;

export const RectangleFirst = styled.div`
  position: absolute;
  top: 0;
  left: 104px;
  width: 8px;
  height: 8px;
  transform: rotate(-25deg);
  flex-shrink: 0;
  border-radius: 3px;
  background: var(--accent-color);

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const RectangleSecond = styled(RectangleFirst)`
  top: 30px;
  left: 333px;

  @media screen and (min-width: 768px) {
    top: 13px;
    left: 694px;
  }

  @media screen and (min-width: 1440px) {
    left: 1150px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  bottom: 0;
  left: 241px;
  width: 6px;
  height: 6px;
  transform: rotate(-25deg);
  flex-shrink: 0;
  border-radius: 3px;
  background: var(--backgraund-color-circle);

  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    border-radius: 3px;

    left: 405px;
  }

  @media screen and (min-width: 1440px) {
    left: 707px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;
