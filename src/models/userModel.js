import mongoose, { Schema, mongo } from "mongoose";

const UserSachema = new Schema({
  username: {
    type: String,
    required: [true, "Username Required !!"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email Required !!"],
  },
  password: {
    type: String,
    require: [true, "Password Required !!"],
  },
  photoURL: {
    type: String,
    default:
      "https://plus.unsplash.com/premium_photo-1675802518662-009a12371c27?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSachema);
