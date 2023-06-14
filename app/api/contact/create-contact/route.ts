import { calculateWindowCost } from "@/lib/utilities/calculateWindowCost";
import { AdminRules } from "@/models/AdminRules/AdminRules.class";
import { ContactI } from "@/models/Contact/Contact.type";
import { QuoteWindowCalculatedI } from "@/models/QuoteWindowCalculated/QuoteWindowCalculated.interface";
import { getAdminRules } from "@/services/adminRules.service";
import { createContact } from "@/services/contact.service";

import { NextResponse } from "next/server";

interface RequestBody {
  contact: ContactI;
}

export async function POST(request: Request) {
  const { contact }: Partial<RequestBody> = await request.json();
  if (!contact)
    return NextResponse.json({ message: "Los datos no estan completos" });
  if (contact.windowsQuote.length === 0 || !contact.windowsQuote)
    return NextResponse.json({ message: "No tienes ventanas en la lista" });
  
  const { windowsQuote, fullName, cellphone, email, address } = contact;

  const adminRules: AdminRules = await getAdminRules();
  const allWindowsCalculated = await Promise.all(
    windowsQuote.map((itemQuote) => calculateWindowCost(itemQuote, adminRules)),
  ).catch((error) => console.error(error));

  const contactBody = {
    data: {
      fullName,
      cellphone,
      email,
      address,
      windowsQuote: allWindowsCalculated as QuoteWindowCalculatedI[],
    },
  };

  const newContact = await createContact(contactBody);
  return NextResponse.json(newContact, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
