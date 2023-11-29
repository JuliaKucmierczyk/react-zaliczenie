import React, { useState, useEffect } from "react";
import Post from "./Post"; // Your Post component

const MainContainer: React.FC = () => {
  return (
    <div className="main-container">
      <Post></Post>
    </div>
  );
};

export default MainContainer;
