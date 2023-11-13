import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import "./styles/style.css";
import PostContainer from "./components/PostContainer";
import UsersContainer from "./components/UsersContainer";
import UsersCard from "./components/UsersCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SavedPosts from "./pages/SavedPosts";
import Users from "./pages/Users";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />

        <Route path="savedposts" element={<SavedPosts />} />

        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
