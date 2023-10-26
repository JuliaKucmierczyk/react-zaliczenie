import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import "./styles/style.css";
import PostContainer from "./components/PostContainer";

function App() {
  return (
    <>
      <Navbar />
      <Aside />
      <PostContainer />
    </>
  );
}

export default App;
