import mongoose from "mongoose";
const PostSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    cover: String,
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true, id: true }
);
const Post = mongoose.model("Post", PostSchema);
export default Post;
