import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// jeszcze jeden taki jest w
interface User {
  id: number;
  username: string;
  email: string;
}

const UsersCard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <Link to={`/user/${user.id}`} key={user.id}>
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
                <h3 className="media__title">{user.username}</h3>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default UsersCard;
