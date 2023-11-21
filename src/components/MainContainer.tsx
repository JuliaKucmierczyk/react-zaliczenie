import React, { useState, useEffect } from "react";
import Post from "./Post"; // Your Post component

const MainContainer: React.FC = () => {
  const [items, setItems] = useState<
    Array<{ type: "post" | "image"; data: any }>
  >([]);

  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await postsResponse.json();
      const posts = postsData
        .slice(0, 4)
        .map((post: any) => ({ type: "post", data: post }));

      // Fetch images
      const imagesResponse = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const imagesData = await imagesResponse.json();
      const images = imagesData
        .slice(0, 4)
        .map((image: any) => ({ type: "image", data: image }));

      // Interleave posts and images
      const combinedItems = [];
      for (let i = 0; i < posts.length; i++) {
        combinedItems.push(posts[i], images[i]);
      }

      setItems(combinedItems);
    };

    fetchPosts();
  }, []);

  return (
    <div className="main-container">
      {items.map((item, index) => {
        return item.type === "post" ? (
          // Render the Post component
          <Post userId={1} id={1} title="mama" body="dasd" />
        ) : (
          // Render an image component
          <div key={`image-${item.data.id}`} className="image-container">
            <img src={item.data.thumbnailUrl} alt={item.data.title} />
          </div>
        );
      })}
    </div>
  );
};

export default MainContainer;
