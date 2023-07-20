import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AdviceBox = styled.div`
  position: absolute;
  top: 113px;
  left: 88px;

  width: 225px;
  border-radius: 8px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.backgroundColor};

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

  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-size: ${({ theme }) => theme.fontSizes[12]}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.meduim};
  line-height: ${({ theme }) => theme.lineHeights[1_5]};
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[14]}px;
    line-height: ${({ theme }) => theme.lineHeights[1_3]};
  }

  @media screen and (min-width: 1280px) {
    line-height: ${({ theme }) => theme.lineHeights[1_4]};
  }
`;

export const AdviceDescAccent = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: auto;
  gap: 4px;

  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-size: ${({ theme }) => theme.fontSizes[10]}px;
  font-family: inherit;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[1_2]};
  letter-spacing: 0.2px;
  cursor: pointer;
  transition: ${({ theme }) =>
    `color ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentColor};
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
