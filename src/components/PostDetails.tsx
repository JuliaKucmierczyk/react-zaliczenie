import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { User } from "./User/UserInfo";
import Comments from "./Comments";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostDetails: React.FC = () => {
  const { postId }: { postId?: number } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await axios.get<Post>(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(postResponse.data);

        const userResponse = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`
        );
        setUser(userResponse.data);
      } catch (error) {
        console.error("Error fetching album details:", error);
      }
    };

    fetchPostAndComments();
  }, [postId]);

  return (
    <div>
      <Navbar />
      {post ? (
        <div className="flex-center">
          <article className="card-post">
            <div className="card-header">
              <h2 className="card-title">{post.title}</h2>
            </div>
            <p className="card-text">{post.body}</p>
            <Link to={`/user/${user?.id}`}>
              <p className="card-post__user">{user?.name}</p>
            </Link>
          </article>
        </div>
      ) : (
        <p>Loading post...</p>
      )}
      <Comments postId={postId} />
    </div>
  );
};

export default PostDetails;
