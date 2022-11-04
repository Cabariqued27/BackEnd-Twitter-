const mongoose = require("mongoose");
const pdSchema = new mongoose.Schema(
  {
    userId: {type: String,required: true},
    postId: {type: String,required: true},
  },
  { timestamps: { createdAt: "created_at" } }
);
module.exports = mongoose.model("PostSaved", pdSchema);
