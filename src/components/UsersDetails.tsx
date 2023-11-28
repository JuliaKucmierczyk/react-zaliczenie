import React from "react";
import { useParams } from "react-router-dom";
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";
import UserAlbums from "./UserAlbums";
import UserInfo from "./UserInfo";
import "../styles/style.css";
import Navbar from "./Navbar";

const UserDetails: React.FC = () => {
  const { userId }: { userId: string } = useParams();

  return (
    <>
      <Navbar></Navbar>
      <h2>User Details</h2>
      <h3>User Info</h3>
      <UserInfo userId={Number(userId)} />
      <UserTodos userId={Number(userId)} />
      <h3>User Posts</h3>
      <div className=" grid grid--1x2 grid--1x3">
        <UserPosts userId={Number(userId)} />
      </div>
      <div className=" grid user-album">
        <UserAlbums userId={Number(userId)} />
      </div>
    </>
  );
};

export default UserDetails;
