import React, { useState, useEffect } from "react";
import axios from "axios";

// Define a type for the post
type PostType = {
  id: number;
  title?: string;
  body?: string;
  userId: number;
};

const Post: React.FC<PostType> = (title, body) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get<PostType>(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setPost(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching post");
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <article className="card-post">
      {post && (
        <>
          {/* <img
            className="card-image"
            src={`https://via.placeholder.com/600/92c952`}
            alt={post.title}
          /> */}
          <div className="card-header">
            <h2 className="card-title">{post.title}</h2>
          </div>
          <p className="card-text">{post.body}</p>
        </>
      )}
    </article>
  );
};

export default Post;
