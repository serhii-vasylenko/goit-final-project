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
  background-position: top 87px center, bottom 0 center;
  background-size: 285px 250px, 100% 58%;
  background-image: url(${orger_sm}), url(${rectangle_sm});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${order_sm_retina}), url(${rectangle_sm});
  }

  @media all and (min-width: 768px) {
    background-position: top 100px center, bottom 0 center;
    background-image: url(${orger_md}), url(${rectangle_md});
    background-size: 409px 359px, 100% 59%;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${orger_md_retina}), url(${rectangle_md});
    }
  }

  @media all and (min-width: 1280px) {
    background-image: url(${orger_lg}), url(${rectangle_lg});
    background-position: bottom 170px left 110px, bottom 0 center;
    background-size: 532px 468px, 100% 40%;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${orger_lg_retina}), url(${rectangle_lg});
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.whiteColor};
  text-decoration: underline;
  font-size: 14px;
  position: absolute;
  top: 670px;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: var(--transition-duration);

  &:focus,
  :hover {
	opacity: 0.7;
  }

  @media (min-width: 768px) {
    top: 965px;
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    top: 620px;
    left: 75%;
  }

  @media (min-width: 1640px) {
    top: 810px;
  }
`;
