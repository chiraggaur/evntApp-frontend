import "../styles/header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1 className="logo-text">EVNT</h1>
        </div>
        <div className="nav-wrapper">
          <NavLink activeClassName="active" to="./home">
            <nav>Home</nav>
          </NavLink>
          <NavLink activeClassName="active" to="./login">
            <nav>Login</nav>
          </NavLink>
          <NavLink activeClassName="active" to="./signup">
            <nav>Signup</nav>
          </NavLink>
          <NavLink activeClassName="active" to="./event">
            <nav>Events</nav>
          </NavLink>
          {/* <a href="./login">
            <nav>Login</nav>
          </a>
          <a href="./signup">
            <nav>Signup</nav>
          </a> */}
        </div>
      </div>
    </>
  );
}

export default Header;
