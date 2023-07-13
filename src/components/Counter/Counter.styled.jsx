import styled from '@emotion/styled';

export const Container = styled.div`
position: absolute;
top:0;
right: 0;
  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);
`;

export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(1.01);
  }
`;

export const Span = styled.span`
  color: #333333;
  margin-left: 14px;
  margin-right: 14px;
  font-size: 14px;
  line-height: 1.3;
`;

export const SVG = styled.svg`
  stroke: #333333;
  stroke-opacity: 0.3;

  &:hover,
  &:focus {
    stroke: var(--accent-color);
    stroke-opacity: 1;
  }

  transition: stroke var(--transition-duration) var(--timing-function);
`;

export const Wrap = styled.div`
padding: 7px 14px;
display: flex;


 
`;
