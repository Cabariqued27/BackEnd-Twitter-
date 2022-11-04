const mongoose = require("mongoose");
const frSchema = new mongoose.Schema(
  {
    userId: {type: String,required: true},
    followingId: {type: String,required: true},
  },
  { timestamps: { createdAt: "created_at" } }
);
module.exports = mongoose.model("Follower", frSchema);
