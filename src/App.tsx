import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import "./styles/style.css";
import PostContainer from "./components/PostContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SavedPosts from "./pages/SavedPosts";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />

        <Route path="savedposts" element={<SavedPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
