import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  salat_sm,
  salat_sm_retina,
  salat_md,
  salat_md_retina,
  salat_lg,
  salat_lg_retina,
} from 'images/wellcomePage/images';

export const Container = styled.div`
  height: 100vh;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${salat_sm});

  //Завантаження ретінізованого 2х фонового зображення
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${salat_sm_retina});
  }

  // Завантаження звичайного фонового зображення для планшету

  @media screen and (min-width: 768px) {
    background-image: url(${salat_md});

    // Завантаження ретінізованого 2х фонового зображення
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${salat_md_retina});
    }
  }

  //Завантаження звичайного фонового зображення для десктопної версії

  @media screen and (min-width: 1280px) {
    background-image: url(${salat_lg});

    // Завантаження ретінізованого 2х фонового зображення
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${salat_lg_retina});
    }
  }
`;

export const Logo = styled.img`
  width: 54px;
  height: 54px;
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 68px;
    height: 68px;

    top: 320px;
  }

  @media (min-width: 1280px) {
    top: 260px;
  }
`;

export const TextContainer = styled.div`
  width: 310px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  position: absolute;
  top: 405px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: inherit;
  color: #fafafa;

  @media (min-width: 768px) {
    width: 600px;
    height: 121px;

    top: 455px;
    gap: 20px;
  }

  @media (min-width: 1280px) {
    width: 544px;
    height: 121px;

    top: 390px;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 1.3;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 249px;
  height: 45px;

  position: absolute;
  top: 520px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 380px;
    height: 67px;

    top: 580px;
    gap: 20px;
  }

  @media (min-width: 1280px) {
    top: 520px;
  }
`;

export const LinkStyled = styled(NavLink)`
  padding: 12px 23px 12px 23px;
  font-size: 14px;
  background-color: #8baa36;

  color: #fafafa;
  border-radius: 24px 44px;
  border: 2px solid transparent;

  &:focus,
  :hover {
    border-color: #fafafa;
    background-color: transparent;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 22px 48px 22px 48px;
  }

  @media (min-width: 1280px) {
  }
`;
