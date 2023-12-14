import React, { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const UserTodos: React.FC<{ userId: number }> = ({ userId }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchUserTodos = async () => {
      try {
        const response = await axios.get<Todo[]>(
          `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching user todos:", error);
      }
    };

    fetchUserTodos();
  }, [userId]);

  return (
    <div className="todos-container">
      <h3>Todos</h3>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserTodos;
