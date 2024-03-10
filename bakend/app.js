import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ name: "Arifa moni", age: 20, email: "arifa@gmail.com" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port:http://localhost:${PORT}`);
});
