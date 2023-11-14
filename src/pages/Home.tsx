import Navbar from "../components/Navbar";
import PostContainer from "../components/PostContainer";
import PostPage from "./PostPage";

const Home = () => {
  return (
    <>
      <Navbar />
      <PostPage />
      {/*  Tylko na razie to tu jest (PostPage) */}
      <PostContainer />
    </>
  );
};

export default Home;
