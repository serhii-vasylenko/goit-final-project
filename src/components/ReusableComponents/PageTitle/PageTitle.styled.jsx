import styled from '@emotion/styled';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.pageTitleColor};
  font-size: ${({ theme }) => theme.fontSizes[28]}px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights['1']};
  letter-spacing: -0.56px;
  padding-bottom: 3px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[32]}px;
    letter-spacing: -0.64px;
    padding-bottom: 6px;
  }
  @media screen and (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes[44]}px;
    letter-spacing: -0.88px;
  }
`;

export const RectangleFirst = styled.div`
  position: absolute;
  top: 76px;
  left: 104px;
  width: 8px;
  height: 8px;
  transform: rotate(-25deg);
  flex-shrink: 0;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    left: 187px;
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 1280px) {
    top: 116px;
    left: 228px;
  }
`;

export const RectangleSecond = styled(RectangleFirst)`
  top: 106px;
  left: 333px;

  @media screen and (min-width: 768px) {
    top: 89px;
    left: 694px;
  }

  @media screen and (min-width: 1280px) {
    top: 129px;
    left: 1149px;
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
  background: ${({ theme }) => theme.colors.pageTitleColor};

  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    border-radius: 3px;

    left: 405px;
  }

  @media screen and (min-width: 1280px) {
    top: 200px;
    left: 706px;
  }
`;

export const Section = styled.section`
  position: relative;
  padding-top: 114px;

  @media screen and (min-width: 768px) {
    padding-top: 136px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 164px;
  }
`;
