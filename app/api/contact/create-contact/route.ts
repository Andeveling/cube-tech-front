import { calculateWindowCost } from "@/lib/utilities/calculateWindowCost";
import { ContactI } from "@/models/Contact/Contact.type";
import { TRM } from "@/models/TRM/TRM.class";
import { createContact } from "@/services/contact.service";
import { getTRM } from "@/services/trm.service";
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
    const { windowsQuote, fullName, cellphone, email, address } = contact;

    console.log(windowsQuote)
    const trm: TRM = await getTRM();
    // Calculate all windows

    const allWindowsCalculated = await Promise.all(
      windowsQuote.map((itemQuote) => calculateWindowCost(itemQuote, trm)),
    ).catch(error => console.error(error));
    // console.log(allWindowsCalculated)
    const body = JSON.stringify({
      data: {
        fullName,
        cellphone,
        email,
        address,
        windowsQuote: allWindowsCalculated,
      },
    });

    const newContact = await createContact(body);
    return NextResponse.json(newContact);
  } catch (error) {
    return NextResponse.json(error);
  }
}
