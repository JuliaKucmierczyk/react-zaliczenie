import SavedPosts from "./SavedPosts";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <nav className="nav-bar">
        <ul className="nav-container">
          <li className="nav-item">Posts</li>
          <li className="nav-item">Saved</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
