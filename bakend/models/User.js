import { Schema } from "mongoose";
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["pending", "approved", "block", "declined"],
    default: "pending",
  },
});
