import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <nav className="nav-bar">
        <ul className="nav-container">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
