import React, { useEffect, useState } from "react";
import axios from "axios";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

const AlbumImages: React.FC<{ albumId?: number }> = ({ albumId }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photosResponse = await axios.get<Photo[]>(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        );
        setPhotos(photosResponse.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <div className="album-images">
      <h3>Album Images</h3>
      <div className="grid grid--1x2">
        {photos.map((photo) => (
          <div key={photo.id}>
            <p>{photo.title}</p>
            <img src={photo.url} alt={photo.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumImages;
