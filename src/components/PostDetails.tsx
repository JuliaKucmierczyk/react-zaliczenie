import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/style.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostDetails: React.FC = () => {
  const { postId }: { postId?: number } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await axios.get<Post>(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(postResponse.data);

        const commentsResponse = await axios.get<Comment[]>(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        );
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("Error fetching post details and comments:", error);
      }
    };

    fetchPostAndComments();
  }, [postId]);

  return (
    <div>
      <Navbar />
      {post ? (
        <article className="card-post">
          <div className="card-header">
            <h2 className="card-title">{post.title}</h2>
          </div>
          <p className="card-text">{post.body}</p>
        </article>
      ) : (
        <p>Loading post...</p>
      )}

      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>
              <strong>{comment.name}</strong>: {comment.email}
            </p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
