import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import store from "./lib/store/store";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // if (state) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // } else {
  //   return NextResponse.next();
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/summary/contact"],
};
