import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { body } = request;
 const res = await request.json();
  /* calculate Windows */
  /* create contact and add the windows calculates */

  return NextResponse.json({ newBody: res });
}
