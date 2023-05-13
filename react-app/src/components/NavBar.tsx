import { NavLink } from "react-router-dom";
import "./Navbar.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
            to="/"
          >
            {({ isActive }) => {
              return isActive ? "Home tab is active" : "Home";
            }}
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
            to="/books"
          >
            {({ isActive }) => {
              return isActive ? "Books tab is active" : "Books";
            }}
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
            to="/books/test"
          >
            {({ isActive }) => {
              return isActive ? "Test tab is active" : "Test";
            }}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
