import styled from '@emotion/styled';

export const PositionWrapper = styled.div`
position: relative;
`;

export const StyledFormControl = styled.div`
  position: relative;
  width: 146px;
  border: 1px solid rgba(217, 217, 217, 0.2);
  border-radius: 6px;
  background-color: rgba(217, 217, 217, 0.2);
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  text-align: left;
  padding: 10px 14px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
    fill: #8baa36;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 175px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 198px;
  }
`;

export const OptionWrapper = styled.div`
position: absolute;
top: 34px;
left: 0;
z-index: 5;
`

export const StyledSelect = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 146px;
  padding: 4px 0;
  border-radius: 0px 0px 6px 6px;
  background-color: #fafafa;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 175px;
  }

  @media screen and (min-width: 1280px) {
    width: 198px;
  }
`;

export const StyledMenuItem = styled.li`
  background-color: #fafafa;
  width: 100%;
  padding: 8px 14px;
  cursor: pointer;

  &:hover {
    background-color: rgba(217, 217, 217, 0.2);
  }

  @media screen and (min-width: 768px) {
    width: 175px;
  }

  @media screen and (min-width: 1280px) {
    width: 198px;
  }
`;
