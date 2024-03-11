import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema(
  {
    body: String,
    status: {
      type: String,
      enum: ["public", "privet"],
      default: "public",
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true, id: true }
);
const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
