import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Photo from "../components/Photo";

const MainContainer: React.FC = () => {
  return (
    <>
      <section className="main-container">
        <article className="main-half">
          <div>
            <Photo />
            <Post id={2} userId={1} />
          </div>

          <Photo />
        </article>
        <article className="main-half">
          <div>
            <Photo />
            <Photo />
          </div>
          <div>
            <Post id={3} userId={1} />
            <Post id={1} userId={1} />
          </div>
        </article>
      </section>
    </>
  );
};

export default MainContainer;
