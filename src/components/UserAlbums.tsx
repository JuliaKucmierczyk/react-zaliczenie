import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Album {
  userId: number;
  id: number;
  title: string;
}

const UserAlbums: React.FC<{ userId: number }> = ({ userId }) => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get<Album[]>(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
        );
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [userId]);

  return (
    <div className="user-albums">
      <h3 className="album-header">User Albums</h3>
      <ul className="album-list">
        {albums.map((album) => (
          <Link to={`/album/${album.id}`} key={album.id}>
            <li className="album-item">{album.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;
