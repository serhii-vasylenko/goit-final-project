import styled from '@emotion/styled';
import { Field} from 'formik';

export const DescriptionFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 67px;
`;

export const ImgWrapper = styled.div`
  width: 279px;
  height: 268px;
  margin-bottom: 32px;
`;
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImgLabel = styled.label`
  width: 279px;
  height: 268px;
`;

export const InputFileThumb = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: var(--accent-color);
  border-radius: 8px;
  cursor: pointer;

  &:active {
    transform: scale(1.01);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const FieldContainer = styled.div`
position:relative;
  display: flex;
  flex-direction: column;
  height: 40px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--input-border-color);
  
  &.error {
    border-bottom-color: var(--error-color);
  }
`;

export const Input = styled(Field)`
font-size: 14px;
border: none; 
background-color: transparent;
padding: 0;
color: #000000;
height: 100%;
outline: none;
`;

export const FieldLabel = styled.label`
position: absolute;
top: 0;
left: 0;
  font-size: 16px;
  color: #797979;
  pointer-events: none;
  /* margin-bottom: 3px; */

`;
