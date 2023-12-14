import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../PostDetails";

const UserPosts: React.FC<{ userId: number }> = ({ userId }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get<Post[]>(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchUserPosts();
  }, [userId]);

  return (
    <>
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <article className="card-post">
            <div className="card-header">
              <h2 className="card-title">{post.title}</h2>
            </div>
            <p className="card-text">{post.body}</p>
          </article>
        </Link>
      ))}
    </>
  );
};

export default UserPosts;
