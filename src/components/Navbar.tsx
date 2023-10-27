import SavedPosts from "../pages/SavedPosts";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <nav className="nav-bar">
        <ul className="nav-container">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/savedposts">
              Saved Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
