import mongoose, { Schema } from "mongoose";
import { getModuleBuildInfo } from "next/dist/build/webpack/loaders/get-module-build-info";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  verifyToken: {
    type: String,
    required: false,
  },
});
const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
