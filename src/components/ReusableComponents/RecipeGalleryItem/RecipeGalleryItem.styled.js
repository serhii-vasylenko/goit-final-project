import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  border-radius: 8px;
`;

export const Thumb = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h3`
  position: absolute;
  width: 307px;
  top: 245px;
  left: 18px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: var(--secondary-text-color);

  background-color: rgba(47, 48, 58, 0.8);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    width: 268px;
    top: 248px;
    left: 16px;
  }
`;
