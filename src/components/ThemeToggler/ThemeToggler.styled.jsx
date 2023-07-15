import styled from '@emotion/styled';

export const TogglerWrapper = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-radius: 8px;
`;

export const Swithcher = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  &:checked + span {
    transform: translateX(30px);
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  gap: 10px;
  width: 61px;
  height: 27px;
  
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  cursor: pointer;
`;

export const Cyrcle = styled.span`
  position: absolute;
  width: 21px;
  height: 21px;

  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  border-radius: 50%;

  transition: transform var(--transition-duration) var(--timing-function);
`;
