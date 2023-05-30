import { calculateWindowCost } from "@/lib/utilities/calculateWindowCost";
import { ContactI } from "@/models/Contact/Contact.type";
import { NextResponse } from "next/server";

interface RequestBody {
  contact: ContactI;
}

export async function POST(request: Request) {
 try {
   const { contact }: Partial<RequestBody> = await request.json();
   if (!contact)
     return NextResponse.json({ message: "Los datos no estan completos" });
   if (contact.windowsQuote.length === 0)
     return NextResponse.json({ message: "No tienes ventanas en la lista" });
   const windowOne = contact.windowsQuote[0];
   const newWindowCost = await calculateWindowCost(windowOne);
   return NextResponse.json(newWindowCost);
 } catch (error) {
  return NextResponse.json(error);
 }
}
