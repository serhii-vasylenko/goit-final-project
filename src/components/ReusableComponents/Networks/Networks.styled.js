import styled from '@emotion/styled';

export const NetworkList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: ${props => props.hoverColor || '18px'};
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  color: var(--accent-color);
  transition: color 250ms var(--timing-function);

  cursor: pointer;

  svg {
    fill: currentColor;
  }

  &:hover,
  &:focus {
    color: ${props => props.hoverColor || '#ffffff'};
  }
`;
