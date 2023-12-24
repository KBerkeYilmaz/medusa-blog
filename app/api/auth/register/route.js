import { connectToDB } from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { hashPassword } from "@lib/auth";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await hashPassword(password, 10);
    await connectToDB();
    await User.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}