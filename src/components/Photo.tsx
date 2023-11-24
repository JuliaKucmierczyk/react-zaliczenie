import React, { useState, useEffect } from "react";

const Photo: React.FC = () => {
  const [randomPhoto, setRandomPhoto] = useState({
    id: 0,
    title: "",
    thumbnailUrl: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();

        // Pick a random photo from the array
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomPhoto = data[randomIndex];

        setRandomPhoto(randomPhoto);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photo data:", error);
        setLoading(false);
      }
    };

    fetchPhotoData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="photo ">
          <img src={randomPhoto.thumbnailUrl} alt={randomPhoto.title} />
        </div>
      )}
    </div>
  );
};

export default Photo;
