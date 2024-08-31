import { connectDb } from "@/helper/db";
import { Product } from "@/models/productModel";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDb();
    const product = await Product.find();
    return NextResponse.json(product);
  } catch (error) {
    console.log("Error getting products: ", error)
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (request) => {
  const { title, content, addedDate, category, price, image } =
    await request.json();
  try {
    const product = new Product({
      title,
      content,
      addedDate,
      category,
      price,
      image,
    });
    await connectDb();
    const createdProduct = await product.save();
    return NextResponse.json(createdProduct, {
      status: 201,
    });
  } catch (error) {
    console.log("Error posting product: ", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
};
