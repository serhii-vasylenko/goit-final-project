import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  //   logo_sm,
  //   logo_md,
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
  background-position: center;
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

export const LinkStyled = styled(NavLink)`
  color: white;
`;
