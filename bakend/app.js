import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { seedUser } from "./seed.js";
dotenv.config();
const app = express();
// bais route
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ name: "Arifa moni", age: 20, email: "arifa@gmail.com" });
});

//NOTE - connection url import
let connectionURL = process.env.MONGO_URI;
connectionURL = connectionURL.replace("<username>", process.env.USER_NAME);
connectionURL = connectionURL.replace("<password>", process.env.USER_PASSWORD);
// Give a Database name and url query parameter
connectionURL = `${connectionURL}/${process.env.DATABASE_NAME}?${process.env.DATABASE_URL_QUREY}`;
// console.log("connection URL: ", connectionURL);
//NOTE - Connection to the database
mongoose
  .connect(connectionURL, {})
  .then(() => {
    console.log("Database connected");
    // app listen
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port:http://localhost:${PORT}`);
      //NOTE - Create fake user with faker js
      seedUser();
    });
  })
  .catch((error) => {
    console.log("Connection faild");
    console.log("message:", error.message);
  });
