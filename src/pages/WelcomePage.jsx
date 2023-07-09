import { NavLink } from "react-router-dom";
// import { Container } from "./pagesStyles/WellcomePage.styled";

const WelcomePage = () => {
  return (
	<div>
      <h1>WelcomePage</h1>
		<NavLink to="/register">
        Register
      </NavLink>
		<br />
      <NavLink to="/signin">
        Log In
      </NavLink>
    </div>
  )
};

export default WelcomePage;
