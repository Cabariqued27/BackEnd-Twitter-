const mongoose = require("mongoose");
const ctSchema = new mongoose.Schema(
  {
    postId: {type: String,required: true},
    author: {type: String,required: true},
    content: {type: String,required: true},
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Comment", ctSchema);

