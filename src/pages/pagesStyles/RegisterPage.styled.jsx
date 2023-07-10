import styled from '@emotion/styled';
import {
  order_sm_retina,
  orger_md,
  orger_sm,
  orger_md_retina,
  orger_lg_retina,
  rectangle_lg,
  rectangle_md,
  rectangle_sm,
  orger_lg,
} from 'images/registrationPage/images';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-repeat: no-repeat;
  background-position: bottom 0px, top 87px;
  /* background-position: center;
  background-size: cover; */
  background-image: url(${orger_sm}), url(${rectangle_sm});

  //Завантаження ретінізованого 2х фонового зображення
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${order_sm_retina});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${orger_md}), url(${rectangle_md});

    background-position: bottom 0px, top 96px;
  }
  // Завантаження ретінізованого 2х фонового зображення
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${orger_md_retina});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${orger_lg}), url(${rectangle_lg});

    background-position: left 113px, bottom 0px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${orger_lg_retina});
  }
`;
