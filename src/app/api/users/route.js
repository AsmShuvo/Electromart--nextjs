import { connectDb } from "@/helper/db";
import { User } from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request) {
  let users = [];
  try {
    await connectDb();
    users = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });
  }

  return NextResponse.json(users);
}

export async function POST(request) {
  const { username, email, password } = await request.json();

  const user = new User({
    username,
    email,
    password,
  });

  try {
    await connectDb();
    user.password = await bcrypt.hash(user.password, parseInt(process.env.SALT));

    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create user !!",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
