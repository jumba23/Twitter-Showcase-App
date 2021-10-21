import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav-bar-container">
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
    </div>
  );
};
export default NavBar;
