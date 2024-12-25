import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">About Us</h1>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="text-lg">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
