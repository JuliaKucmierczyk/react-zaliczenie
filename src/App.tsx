import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import UserDetails from "./pages/UsersDetails";
import PostDetails from "./components/PostDetails";
import AlbumDetails from "./components/AlbumDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="/user/:userId" element={<UserDetails />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/album/:albumId" element={<AlbumDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
