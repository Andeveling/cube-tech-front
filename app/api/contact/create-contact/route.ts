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
    if (contact.windowsQuote.length === 0 || !contact.windowsQuote)
      return NextResponse.json({ message: "No tienes ventanas en la lista" });
    const windowOne = contact.windowsQuote[0];
    // ok calculate windows cost
    const newWindowCost = await calculateWindowCost(windowOne);
    // TODO: return object with windows list cost render to quote document
    return NextResponse.json(newWindowCost);
  } catch (error) {
    return NextResponse.json(error);
  }
}
