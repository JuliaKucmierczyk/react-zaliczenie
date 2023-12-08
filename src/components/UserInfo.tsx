import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserInfo: React.FC<{ userId: number }> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, [userId]);

  return (
    <div>
      {user ? (
        <div className="card">
          <div className="media">
            <div className="media__image">
              <span className="icon-container">
                <img
                  className="thumb"
                  src="/src/images/person_FILL0_wght400_GRAD0_opsz24.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="media__body">
              <h3 className="media__title">{user.name}</h3>
              <p>{user.username},</p>
              <p>{user.email},</p>
              <p>Email: {user.email},</p>
              <p>
                Address: {user.address.street}, {user.address.suite},{" "}
                {user.address.city}, {user.address.zipcode},
              </p>
              <p>Phone: {user.phone},</p>
              <p>Website: {user.website},</p>
              <p>
                Company: {user.company.name}, {user.company.catchPhrase},{" "}
                {user.company.bs}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default UserInfo;
