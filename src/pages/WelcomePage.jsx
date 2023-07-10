
import { Container, LinkStyled } from "./pagesStyles/WellcomePage.styled";

const WelcomePage = () => {
  return (
	<Container>
      {/* <picture>

      <source
        media="(max-width: 767px)"
        srcset="
        images/hero/slider-pic7_sm.png     1x,
        images/hero/slider-pic7@2x_sm.png 2x
        "
        type="image/png"
      />
      <source
        media="(min-width: 768px)"
        srcset="
          images/hero/slider-pic7_md.png     1x,
          images/hero/slider-pic7@2x_md.png 2x
        "
        type="image/png"
      />
      <source
        media="(min-width: 1200px)"
        srcset="
          images/hero/slider-pic7_lg.png     1x,
          images/hero/slider-pic7@2x_lg.png 2x
        "
        type="image/png"
      />
      <img
        class="hero__img"
        src="images/hero/slider-pic7_sm.png"
        alt="ice-cream-cone"
        width="171"
      />
    </picture> */}
		<LinkStyled to="/register">
        Register
      </LinkStyled>
		<br />
      <LinkStyled to="/signin">
        Log In
      </LinkStyled>
    </Container>
  )
};

export default WelcomePage;
