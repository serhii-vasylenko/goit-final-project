import styled from '@emotion/styled';

export const NetworkList = styled.ul`
  display: flex;
  justify-content: ${props => props.flex || 'center'};
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

  color: ${props => props.iconColor};
  transition: ${({ theme }) => theme.transforms.all};
  cursor: pointer;

  svg {
    fill: currentColor;
  }

  &:hover {
    color: ${props => props.hoverColor || '#ffffff'};
  }

  &:focus {
    color: ${props => props.hoverColor || '#ffffff'};
    box-shadow: ${props => props.boxShadow || 'none'};
    border-radius: ${props => props.borderRadius || 'none'};;
    outline: ${props => props.outline}
  }
`;
