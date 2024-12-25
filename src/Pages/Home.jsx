import React, { useEffect, useState } from "react";
import axios from "axios";
import cclogo from "../assets/cclogo.png"

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api/message").then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the Home Page of CC</h1>
      <p className="mt-4 text-lg">{message}</p>
      <img
        src={cclogo}
        alt="CC Logo"
        className="mt-4"
      />
    </div>
  );
};

export default Home;
