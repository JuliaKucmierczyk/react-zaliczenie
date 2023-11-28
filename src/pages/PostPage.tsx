import Post from "../components/Post";
import Comments from "../components/Comments";

const PostPage = () => {
  return (
    <div className="post-page">
      {/* <Post userId={1} id={1} title="mama" body="dasd" /> */}
      <Comments />
    </div>
  );
};

export default PostPage;
