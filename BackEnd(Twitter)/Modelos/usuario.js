const mongoose = require("mongoose");
const urSchema = new mongoose.Schema(
  {
    username: {type: String,required: true,unique: true},
    email: {type: String,required: true,unique: true},
    password: {type: String,required: true},
    bd: {type: Date,required: true},
    bio: {type: String,required: true},
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const hashPw = async (pw) => {
  return bcrypt.hash(pw, bcrypt.genSaltSync(10));
};
userSchema.pre("save", async function () {
  if (this.isModified("password") || this.isNew) {
    this.password = await hashPw(this.password);
  }
});
module.exports = mongoose.model("User", urSchema);
