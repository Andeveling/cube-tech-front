import { calculateWindowCost } from "@/lib/utilities/calculateWindowCost";
import { AdminRules } from "@/models/AdminRules/AdminRules.class";
import { ContactI } from "@/models/Contact/Contact.type";
import { getAdminRules } from "@/services/adminRules.service";
import { createContact } from "@/services/contact.service";
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


  
    const adminRules: AdminRules = await getAdminRules(); 
    // Calculate all windows

    const allWindowsCalculated = await Promise.all(
      windowsQuote.map((itemQuote) =>
        calculateWindowCost(itemQuote, adminRules),
      ),
    ).catch((error) => console.error(error));
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
