import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model.Login || mongoose.model("Login", LoginSchema);
