import { NavLink } from "react-router-dom";
import Logo from "../assets/enhancedlogo.png";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h1>
          <img src={Logo} alt="Eagles Temple Logo" />
        </h1>

        <ul className="nav-links">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/give">Give</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
   </header>
  );
}

export default Navbar;
