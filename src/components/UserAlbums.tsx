import React, { useEffect, useState } from "react";
import axios from "axios";

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
          <li className="album-item" key={album.id}>
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;
