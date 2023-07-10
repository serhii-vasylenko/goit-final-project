import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AdviceBox = styled.div`
  position: absolute;
  top: 113px;
  left: 88px;

  width: 225px;
  border-radius: 8px;
  padding: 8px;
  background: var(--background-color);

  @media screen and (min-width: 768px) {
    top: 213px;
    left: 75px;
    width: 261px;
    padding: 12px;
  }

  @media screen and (min-width: 1280px) {
    top: 336px;
    left: 342px;
    width: 298px;
    padding: 16px;
  }
`;

export const AdviceDesc = styled.p`
  margin-bottom: 4px;
  text-align: left;

  color: var(--secondary-text-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1280px) {
    line-height: 1.4;
  }
`;

export const AdviceDescAccent = styled.span`
  color: var(--accent-color);
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: auto;
  gap: 4px;

  color: var(--secondary-text-color);
  font-size: 10px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.2px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;

export const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
    >
      <path
        d="M3.5 9H15.5M15.5 9L11 4.5M15.5 9L11 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
