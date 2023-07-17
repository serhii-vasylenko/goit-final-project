import styled from '@emotion/styled/macro';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);
`;

export const Svg = styled.svg`
  stroke: #333333;
  stroke-opacity: 0.3;

  transition: stroke var(--transition-duration) var(--timing-function);

  @media screen and (min-width: 768px) {
        width: 16px;
        height: 16px;
      }
`;

export const Button = styled.button`
outline: none;
  width: auto;
  height: auto;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(1.01);
  }

  &:hover {
    ${Svg} {
      stroke: var(--accent-color);
      stroke-opacity: 1;
    }
  }
  &:focus {
    border: 1px solid rgba(217, 217, 217, 1);
    border-radius: 4px;
    ${Svg} {
      stroke: var(--accent-color);
      stroke-opacity: 1;
    }
  }
`;

export const Span = styled.span`
  color: #333333;
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
