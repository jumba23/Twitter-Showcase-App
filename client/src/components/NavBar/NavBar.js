import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav id="nav-bar-container">
      <NavLink
        to="/"
        exact
        className="nav-selection" activeClassName="selected"
      >
        Home
      </NavLink>
      <NavLink
        to="/search"
        className="nav-selection" activeClassName="selected"
      >
        Search
      </NavLink>
      <NavLink
        to="/favorites"
        className="nav-selection" activeClassName="selected"
      >
        Favorites
      </NavLink>
    </nav>
  );
};
export default NavBar;
