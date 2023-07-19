import styled from '@emotion/styled/macro';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.counterBrdColor};
`;

export const Svg = styled.svg`
  stroke: ${({ theme }) => theme.colors.counterBrdColor};

  transition: stroke ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};

  @media screen and (min-width: 768px) {
        width: 16px;
        height: 16px;
      }
`;

export const Button = styled.button`
  width: auto;
  outline: none;
  height: auto;
  padding: 0;
  background: none;
  border: none;
  transition: box-shadow ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};
  cursor: pointer;

  &:active {
    transform: scale(1.01);
  }

  &:hover {
    ${Svg} {
      stroke: ${({ theme }) => theme.colors.accentColor};
      stroke-opacity: 1;
    }
  }
  &:focus {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.boxShadow};
    border-radius: 4px;
    ${Svg} {
      stroke: ${({ theme }) => theme.colors.accentColor};
      stroke-opacity: 1;
    }
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.svgCrossColor};
  margin-left: 14px;
  margin-right: 14px;
  font-size: 14px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
        font-size: 16px;
      }
`;

export const Wrap = styled.div`
  padding: 7px 14px;
  display: flex;
`;
