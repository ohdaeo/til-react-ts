import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

interface HeaderProps {
  children?: ReactNode;
}

// const Header: React.FC<HeaderProps> = ({ children }) => {
//   return (
//     <div>
//       Header
//       <div>{children}</div>
//     </div>
//   );
// };
const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <div>
      Header
      <div>{children}</div>
      <ul style={{ display: "flex" }}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/company"
          >
            COMPANY
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/good"
          >
            GOOD
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
