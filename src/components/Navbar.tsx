import SavedPosts from "./SavedPosts";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="Logo" />
      <ul className="nav-container">
        <li className="nav-item">Posts</li>
        <li className="nav-item">Saved</li>
      </ul>
      <SavedPosts />
    </nav>
  );
};

export default Navbar;
