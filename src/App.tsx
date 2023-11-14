import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
