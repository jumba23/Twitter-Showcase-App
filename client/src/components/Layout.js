import NavBar from "./NavBar/NavBar.js";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div id="container">
      <NavBar />
      <div id="page-content">{children}</div>
    </div>
  );
};

export default Layout;
