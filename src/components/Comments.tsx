import React, { useState, useEffect } from "react";
import axios from "axios";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get<Comment[]>(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const filteredComments = response.data.filter(
          (comment) => comment.postId === 1
        );
        setComments(filteredComments);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="comments-container">
      {/* <h2>Comments for Post ID 1</h2> */}
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <h3>
            {comment.name} <span>({comment.email})</span>
          </h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
