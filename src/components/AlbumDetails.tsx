import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AlbumImages from "./AlbumImages";
import "../styles/style.css";
import Navbar from "./Navbar";
import { User } from "./UserInfo";

interface Album {
  userId: number;
  id: number;
  title: string;
}

const AlbumDetails: React.FC = () => {
  const { albumId }: { albumId: string } = useParams();
  const [album, setAlbum] = useState<Album | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        // Fetch album details
        const albumResponse = await axios.get<Album>(
          `https://jsonplaceholder.typicode.com/albums/${albumId}`
        );
        setAlbum(albumResponse.data);

        // Fetch user details for the album
        const userResponse = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${albumResponse.data.userId}`
        );
        setUser(userResponse.data);
      } catch (error) {
        console.error("Error fetching album details:", error);
      }
    };

    fetchAlbumData();
  }, [albumId]);

  return (
    <div className="album-details">
      <Navbar />
      {album && user && (
        <>
          <div className="flex-cos">
            <h2 className="album-title">{album.title}</h2>
            <Link to={`/user/${user.id}`}>
              <p className="album-user">{user.name}</p>
            </Link>
          </div>
          <AlbumImages albumId={albumId} />
        </>
      )}
    </div>
  );
};

export default AlbumDetails;
