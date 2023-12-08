import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const MainPosts: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostType[]>(
          `https://jsonplaceholder.typicode.com/posts?_limit=30`
        );
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching posts");
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <article className="card-post" style={{ marginBottom: "20px" }}>
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

export default MainPosts;
