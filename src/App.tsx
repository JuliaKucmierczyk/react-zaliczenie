import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import UserDetails from "./components/UsersDetails";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="/user/:userId" element={<UserDetails />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
