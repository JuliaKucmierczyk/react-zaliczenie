import Post from "../components/Post";
import Comments from "../components/Comments";

const PostPage = () => {
  return (
    <div className="post-page">
      <Post />
      <Comments />
    </div>
  );
};

export default PostPage;
