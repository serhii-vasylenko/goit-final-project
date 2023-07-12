import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionFields = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputFileThumb = styled.div`
  width: 279px;
  height: 268px;
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
