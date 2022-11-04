const mongoose = require("mongoose");
const rtSchema = new mongoose.Schema(
  {
    fromId: {type: String,required: true},
    toId: {type: String,required: true},
    status: {type: String,default: false},
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
module.exports = mongoose.model("Request", rtSchema);
