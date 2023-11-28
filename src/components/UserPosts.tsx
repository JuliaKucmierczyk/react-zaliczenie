import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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
        <article className="card-post" key={post.id}>
          <div className="card-header">
            <h2 className="card-title">{post.title}</h2>
          </div>
          <p className="card-text">{post.body}</p>
        </article>
      ))}
    </>
  );
};

export default UserPosts;
