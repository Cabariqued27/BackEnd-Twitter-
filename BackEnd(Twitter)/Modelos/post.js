const mongoose = require("mongoose");
const ptSchema = new mongoose.Schema(
  {
    authorId: {type: String,required: true},
    imgLink: {type: String,default: ""},
    description: {type: String,required: true},
  },
  { timestamps: { createdAt: "created_at" } }
);
module.exports = mongoose.model("Post", ptSchema);
