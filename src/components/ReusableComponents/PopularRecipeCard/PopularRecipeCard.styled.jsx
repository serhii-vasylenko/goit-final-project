import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Recipe = styled(NavLink)`
  outline: none;
  width: 343px;
  padding-bottom: 13px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.popularCardBrdColor};
  display: flex;

  transition: box-shadow ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};

  &:focus {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.boxShadow};
    border-radius: 6px;
  }

  &:hover {
    scale: 1.02;
  }

  transition: scale ${({ theme }) => theme.transforms.transitionDuration} ${({ theme }) => theme.transforms.timingFunction};

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 319px;
    gap: 11px;
  }
`;

export const ImageWrapper = styled.div`
  width: 104px;
  height: 85px;
  margin-right: 12px;
  flex-shrink: 0;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 102px;
  }

  @media (min-width: 1280px) {
    width: 97px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.popularRecipeDescriptionColor};
`;
