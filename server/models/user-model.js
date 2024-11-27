import mongoose from "mongoose";
import JWT from "jsonwebtoken";

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.generateToken = async function () {
  try {
    return JWT.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      "ayushsinghchouhan"
    );
  } catch (error) {
    console.log(error.message);
  }
};

const User = new mongoose.model("User", userSchema);

export default User;
