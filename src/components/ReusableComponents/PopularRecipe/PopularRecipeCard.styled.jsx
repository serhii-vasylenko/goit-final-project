import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Recipe = styled(NavLink)`
outline: none;
  width: 343px;
  padding-bottom: 13px;
  border-bottom: 1px solid #7070702b;
  display: flex;

  transition: box-shadow var(--transition-duration) var(--timing-function);

&:focus {
  box-shadow: 0 0 5px rgba(217, 217, 217, 1);
  border-radius: 6px;
}

&:hover {
  scale: 1.02;
}

transition: scale var(--transition-duration) var(--timing-function);

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
  color: var(--secondary-text-color);
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 1.3;
  color: #7e7e7e;
`;
