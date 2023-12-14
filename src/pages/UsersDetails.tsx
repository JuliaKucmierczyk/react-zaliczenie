import React from "react";
import { useParams } from "react-router-dom";
import UserTodos from "../components/User/UserTodos";
import UserPosts from "../components/User/UserPosts";
import UserAlbums from "../components/User/UserAlbums";
import UserInfo from "../components/User/UserInfo";
import Navbar from "../components/Navbar";

const UserDetails: React.FC = () => {
  const { userId }: { userId?: number } = useParams();

  return (
    <>
      <Navbar />
      <h2>User Details</h2>
      <h3>User Info</h3>
      <UserInfo userId={Number(userId)} />
      <UserTodos userId={Number(userId)} />
      <h3>User Posts</h3>
      <div className="user-posts-container">
        <div className=" grid ">
          <UserPosts userId={Number(userId)} />
        </div>
      </div>
      <div className="grid user-album">
        <UserAlbums userId={Number(userId)} />
      </div>
    </>
  );
};

export default UserDetails;
