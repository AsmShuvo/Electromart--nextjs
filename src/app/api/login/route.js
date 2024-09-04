import { User } from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb } from "@/helper/db";
import jwt from "jsonwebtoken";
export const POST = async (request) => {
  const { email, password } = await request.json();
  try {
    connectDb();
    // get suer
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      throw new Error("User not found");
    }
    // matching password
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Password Not Matched");
    }

    // generate token
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_KEY
    );
    console.log("TOKEN: ", token);

    const response = NextResponse.json({
      message: "Login Success",
      success: true,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "24h",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },  
      { status: 500 }
    );
  }
};
