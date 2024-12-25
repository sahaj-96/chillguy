const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "First time trying WebD." });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "I am a Chill Guy" },
    { id: 2, name: "yeshu di balle balle" },
    { id: 3, name: "ToDo list: Kalesh done." },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
