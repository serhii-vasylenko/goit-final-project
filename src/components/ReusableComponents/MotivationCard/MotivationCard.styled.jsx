import styled from '@emotion/styled';
import one from './images/1.jpeg';

export const Card = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  border-radius: 30px;
  background-image: url(${one});
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    /* width: 100%; */
    /* height: 100%; */
    border-radius: 30px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
  @media screen and (min-width: 1280px) {
    height: 500px;
    width: 500px;
  }
`;
export const Content = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  height: 180px;
  width: 200px;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  padding: 32px 24px 0 24px;

  @media screen and (min-width: 768px) {
    width: 268px;
    height: 242px;
    bottom: 24px;
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    bottom: 40px;
  }
`;
export const Text = styled.p`
  color: #fafafa;
`;
export const Accent = styled.span`
  color: #8baa36;
`;

export const Bg = styled.svg`
  height: 180px;
  width: 200px;
  position: absolute;
  z-index: 8;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  fill: rgba(217, 217, 217, 0.84);

  @media screen and (min-width: 768px) {
    width: 268px;
    height: 242px;
    bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    bottom: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #8baa36;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: #6b8328;
  }
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
    bottom: 14px;
  }
`;
export const Button = styled.svg`
  stroke: #fafafa;
  height: 24px;
  width: 24px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
