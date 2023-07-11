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
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-position: top 30px center, bottom 0 center;
  background-size: auto, 100% 60%;
  background-image: url(${orger_sm}), url(${rectangle_sm});

  //Завантаження ретінізованого 2х фонового зображення
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${order_sm_retina});
  }

  @media screen and (min-width: 768px) {
    /* height: 140vh; */
    background-image: url(${orger_md}), url(${rectangle_md});
    background-size: auto, 100% 55%;
  }
  // Завантаження ретінізованого 2х фонового зображення
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${orger_md_retina});
  }

  @media screen and (min-width: 1280px) {
    /* height: 100vh; */
    background-image: url(${orger_lg}), url(${rectangle_lg});
    background-position: bottom 170px left 110px, bottom 0 center;
    background-size: auto, 100% 40%;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${orger_lg_retina});
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--white-color);
  text-decoration: underline;
  font-size: 14px;
  position: absolute;
  top: 650px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    top: 730px;
  }

  @media (min-width: 1280px) {
    top: 630px;
    left: 75%;
    font-size: 16px;
  }

  @media (min-width: 1640px) {
    top: 780px;
  }
`;
