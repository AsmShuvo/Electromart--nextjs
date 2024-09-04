import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware");
  const authToken = request.cookies.get("authToken")?.value;
  console.log("token in middleware: ", authToken);

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";

  console.log("#", loggedInUserNotAccessPaths);

  if (loggedInUserNotAccessPaths) {
    if (authToken) {
      console.log("redirect to profile/user");
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  }

  //   return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: ["/profile/user", "/login", "/register"],
};
