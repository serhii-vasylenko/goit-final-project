import styled from '@emotion/styled/macro';

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #fafafa;
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
  border-radius: 33px;
  padding: 20px 24px;
`;

export const Item = styled.li`
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => (props.dots || props.disabled ? 'default' : 'pointer')};
  border-radius: 50%;
  background-color: ${props => (props.selected ? '#EBF3D4' : '#fafafa')};
  &:hover {
    background-color: ${props =>
      props.disabled ? '#fafafa' : props.selected ? '#EBF3D4' : '#EBF3D4'};
  }
  color: #656565;
`;

export const Icon = styled.svg`
  width: 8px;
  height: 15px;

  fill: ${props => (props.disabled ? '#a9a9a9ba' : '#656565')};
`;
